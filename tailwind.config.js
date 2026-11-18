export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { ink: '#0a0a0f', panel: '#12121a', line: '#23232f', paper: '#f4f3ef', mute: '#9a9aa8', accent: '#8b7cf6', mint: '#5eead4' },
    fontFamily: { sans: ['Space Grotesk', 'system-ui', 'sans-serif'], mono: ['JetBrains Mono', 'ui-monospace', 'monospace'] },
    keyframes: { marquee: { to: { transform: 'translateX(-50%)' } } },
    animation: { marquee: 'marquee 35s linear infinite' }
  } }
}
