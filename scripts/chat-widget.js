/* ============================================================
   CHAT WIDGET — VersaBold Innovations
   Conecta con /api/chat backend. Polling para mensajes del agente.
   Persiste sessionId y mensajes en localStorage.
   ============================================================ */

(function chatWidget() {
  const API_BASE   = 'https://api.versabold.com/api/chat';
  const LS_SESSION = 'vb_chat_session';
  const LS_MSGS    = 'vb_chat_messages';

  let sessionId = null;
  let pollTimer = null;
  let isOpen    = false;

  /* ── PERSISTENCIA ───────────────────────────────────────── */
  function saveSession(id) {
    localStorage.setItem(LS_SESSION, id);
  }

  function loadSession() {
    return localStorage.getItem(LS_SESSION);
  }

  function saveMessages(messages) {
    localStorage.setItem(LS_MSGS, JSON.stringify(messages));
  }

  function loadMessages() {
    try {
      return JSON.parse(localStorage.getItem(LS_MSGS)) ?? [];
    } catch (_) {
      return [];
    }
  }

  function pushMessage(role, content) {
    const msgs = loadMessages();
    msgs.push({ role, content, ts: Date.now() });
    saveMessages(msgs);
  }

  function clearSession() {
    localStorage.removeItem(LS_SESSION);
    localStorage.removeItem(LS_MSGS);
  }

  /* ── DOM ────────────────────────────────────────────────── */
  function buildWidget() {
    const el = document.createElement('div');
    el.className = 'chat-bubble';
    el.innerHTML = `
      <div class="chat-window" id="chat-window">
        <div class="chat-header">
          <div class="chat-header-avatar">💬</div>
          <div class="chat-header-info">
            <div class="chat-header-name">VersaBold</div>
            <div class="chat-header-status">En línea ahora</div>
          </div>
          <button class="chat-close-btn" id="chat-close" aria-label="Cerrar chat">✕</button>
        </div>
        <div class="chat-messages" id="chat-messages"></div>
        <div class="chat-typing" id="chat-typing">
          <span></span><span></span><span></span>
        </div>
        <div class="chat-input-area">
          <input type="text" class="chat-input" id="chat-input" placeholder="Escribe tu mensaje..." autocomplete="off" maxlength="500">
          <button class="chat-send-btn" id="chat-send" aria-label="Enviar">↑</button>
        </div>
      </div>
      <button class="chat-bubble-btn" id="chat-toggle" aria-label="Abrir chat con VersaBold">
        💬
        <span class="chat-badge" id="chat-badge"></span>
      </button>
    `;
    document.body.appendChild(el);

    document.getElementById('chat-toggle').addEventListener('click', toggleChat);
    document.getElementById('chat-close').addEventListener('click', closeChat);
    document.getElementById('chat-send').addEventListener('click', sendMessage);
    document.getElementById('chat-input').addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });

    // Restaurar sesión previa si existe
    const saved = loadSession();
    if (saved) {
      sessionId = saved;
      restoreMessages();
      startPolling();
    } else {
      // Mensaje de bienvenida solo si es sesión nueva
      appendMessage('👋 ¡Hola! Soy el asistente de VersaBold. ¿En qué puedo ayudarte hoy?', 'bot', false);
    }
  }

  function restoreMessages() {
    const msgs = loadMessages();
    if (msgs.length === 0) {
      appendMessage('👋 ¡Hola! Soy el asistente de VersaBold. ¿En qué puedo ayudarte hoy?', 'bot', false);
      return;
    }
    msgs.forEach(m => appendMessage(m.content, m.role, false));
  }

  /* ── OPEN / CLOSE ───────────────────────────────────────── */
  function toggleChat() {
    isOpen ? closeChat() : openChat();
  }

  async function openChat() {
    isOpen = true;
    document.getElementById('chat-window').classList.add('open');
    document.getElementById('chat-toggle').innerHTML = '✕<span class="chat-badge" id="chat-badge"></span>';
    document.getElementById('chat-badge').style.display = 'none';
    document.getElementById('chat-toggle').classList.remove('has-new');
    document.getElementById('chat-input').focus();

    if (!sessionId) {
      try {
        const res  = await fetch(`${API_BASE}/session`, { method: 'POST' });
        const data = await res.json();
        sessionId = data.sessionId;
        saveSession(sessionId);
        startPolling();
      } catch (e) {
        console.error('Chat session error:', e);
      }
    }
  }

  function closeChat() {
    isOpen = false;
    document.getElementById('chat-window').classList.remove('open');
    document.getElementById('chat-toggle').innerHTML = '💬<span class="chat-badge" id="chat-badge"></span>';
  }

  /* ── MESSAGES ───────────────────────────────────────────── */
  function appendMessage(content, role, persist = true) {
    const container = document.getElementById('chat-messages');
    const msg = document.createElement('div');
    msg.className = `chat-msg ${role}`;
    msg.textContent = content;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
    if (persist) pushMessage(role, content);
  }

  function showTyping(visible) {
    document.getElementById('chat-typing').classList.toggle('visible', visible);
    const container = document.getElementById('chat-messages');
    container.scrollTop = container.scrollHeight;
  }

  async function sendMessage() {
    const input = document.getElementById('chat-input');
    const text  = input.value.trim();
    if (!text || !sessionId) return;

    input.value = '';
    appendMessage(text, 'user');
    showTyping(true);

    try {
      const res = await fetch(`${API_BASE}/session/${sessionId}/message`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ message: text }),
      });
      const data = await res.json();
      showTyping(false);

      if (data.reply) {
        appendMessage(data.reply, data.source === 'agent' ? 'agent' : 'bot');
      }
    } catch (e) {
      showTyping(false);
      appendMessage('Hubo un error. Intenta de nuevo en un momento.', 'bot');
    }
  }

  /* ── POLLING (agent messages) ───────────────────────────── */
  function startPolling() {
    if (pollTimer) clearInterval(pollTimer);
    pollTimer = setInterval(async () => {
      if (!sessionId) return;
      try {
        const res  = await fetch(`${API_BASE}/session/${sessionId}/poll`);
        const data = await res.json();
        if (data.message) {
          if (isOpen) {
            showTyping(false);
            appendMessage(data.message, 'agent');
          } else {
            const btn = document.getElementById('chat-toggle');
            if (btn) btn.classList.add('has-new');
            appendMessage(data.message, 'agent');
          }
        }
      } catch (_) {}
    }, 3000);
  }

  /* ── INIT ───────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildWidget);
  } else {
    buildWidget();
  }
})();
