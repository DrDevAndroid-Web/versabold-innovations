import { createContext, useContext } from 'react';

const FONT_MAP = {
  modern:  "'Inter', sans-serif",
  elegant: "'Lora', serif",
  bold:    "'Montserrat', sans-serif",
  minimal: "'DM Sans', sans-serif",
};

function applyTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty('--color-primary',   theme.primary_color);
  root.style.setProperty('--color-secondary', theme.secondary_color);
  root.style.setProperty('--color-accent',    theme.accent_color);
  root.style.setProperty('--color-bg',        theme.background_color);
  root.style.setProperty('--color-text',      theme.text_color);
  root.style.setProperty('--font-body',       FONT_MAP[theme.font_style] ?? FONT_MAP.modern);
  document.body.dataset.buttonStyle = theme.button_style ?? 'rounded';
  document.body.dataset.layout      = theme.layout_style ?? 'default';

  // Inyectar Google Fonts dinámicamente según font_style
  const fontLinks = {
    modern:  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
    elegant: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Raleway:wght@400;600&display=swap',
    bold:    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap',
    minimal: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap',
  };
  const href = fontLinks[theme.font_style] ?? fontLinks.modern;
  if (!document.querySelector(`link[href="${href}"]`)) {
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }
}

const ConfigContext = createContext(null);

export function ConfigProvider({ data, children }) {
  applyTheme(data.theme);
  return (
    <ConfigContext.Provider value={data}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  return useContext(ConfigContext);
}
