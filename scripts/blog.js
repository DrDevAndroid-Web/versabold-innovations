/* ── Blog JS — VersaBold Innovations ── */

const API_BASE = "https://api.versabold.com/api/blog";

/* ── Utility ── */
function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("es-ES", {
    year: "numeric", month: "long", day: "numeric",
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ════════════════════════════════════════════════════════
   BLOG LISTING  (blog/index.html)
════════════════════════════════════════════════════════ */
async function initBlogListing() {
  const grid   = document.getElementById("blog-grid");
  const loader = document.getElementById("blog-loader");
  const empty  = document.getElementById("blog-empty");
  if (!grid) return;

  try {
    const res  = await fetch(`${API_BASE}/posts?status=published&limit=30`);
    const data = await res.json();
    loader.hidden = true;

    if (!data.posts || data.posts.length === 0) {
      empty.hidden = false;
      return;
    }

    grid.innerHTML = data.posts.map(post => `
      <article class="blog-card fade-in">
        ${post.cover_image
          ? `<a href="post.html?slug=${encodeURIComponent(post.slug)}" class="blog-card__img-wrap">
               <img src="${escapeHtml(post.cover_image)}" alt="${escapeHtml(post.title)}" loading="lazy">
             </a>`
          : ""}
        <div class="blog-card__body">
          <time class="blog-card__date" datetime="${post.published_at}">
            ${formatDate(post.published_at)}
          </time>
          <h2 class="blog-card__title">
            <a href="post.html?slug=${encodeURIComponent(post.slug)}">${escapeHtml(post.title)}</a>
          </h2>
          ${post.excerpt ? `<p class="blog-card__excerpt">${escapeHtml(post.excerpt)}</p>` : ""}
          <a href="post.html?slug=${encodeURIComponent(post.slug)}" class="blog-card__cta">
            Leer más →
          </a>
        </div>
      </article>
    `).join("");

  } catch (err) {
    loader.hidden = true;
    empty.textContent = "Error cargando el blog. Intenta más tarde.";
    empty.hidden = false;
    console.error("Blog listing error:", err);
  }
}

/* ════════════════════════════════════════════════════════
   SINGLE POST  (blog/post.html)
════════════════════════════════════════════════════════ */
async function initBlogPost() {
  const container = document.getElementById("post-container");
  if (!container) return;

  const slug = new URLSearchParams(window.location.search).get("slug");
  if (!slug) {
    container.innerHTML = "<p>Post no encontrado.</p>";
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/posts/${encodeURIComponent(slug)}`);
    if (!res.ok) throw new Error("not found");
    const post = await res.json();

    document.title = `${post.title} — VersaBold Innovations`;

    container.innerHTML = `
      ${post.cover_image
        ? `<div class="post-cover"><img src="${escapeHtml(post.cover_image)}" alt="${escapeHtml(post.title)}"></div>`
        : ""}
      <header class="post-header">
        <time class="post-date" datetime="${post.published_at}">${formatDate(post.published_at)}</time>
        <h1 class="post-title">${escapeHtml(post.title)}</h1>
        ${post.excerpt ? `<p class="post-excerpt">${escapeHtml(post.excerpt)}</p>` : ""}
      </header>
      <div class="post-body">${post.content}</div>
      <div class="post-footer">
        <a href="index.html" class="btn-back">← Volver al blog</a>
      </div>
    `;

  } catch (err) {
    container.innerHTML = `<p>No se pudo cargar el post. <a href="index.html">Volver al blog</a></p>`;
    console.error("Post error:", err);
  }
}

/* ── Auto-init ── */
document.addEventListener("DOMContentLoaded", () => {
  initBlogListing();
  initBlogPost();
});
