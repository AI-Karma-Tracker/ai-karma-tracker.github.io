// Simple brand logo chips (rounded tile + white glyph) per provider.
// Abstracted marks in each brand's colour - not the exact trademarks.
const tile = (bg: string, glyph: string) =>
  `<svg width="26" height="26" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" style="flex:0 0 auto;border-radius:7px">
    <rect width="28" height="28" rx="7" fill="${bg}"/>${glyph}</svg>`;

const st = 'stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"';

export const LOGOS: Record<string, string> = {
  Claude: tile('#D97757', `<g ${st}><line x1="14" y1="6.5" x2="14" y2="21.5"/><line x1="6.5" y1="14" x2="21.5" y2="14"/><line x1="8.7" y1="8.7" x2="19.3" y2="19.3"/><line x1="19.3" y1="8.7" x2="8.7" y2="19.3"/></g>`),
  ChatGPT: tile('#10A37F', `<path d="M14 6.5l6.5 3.75v7.5L14 21.5l-6.5-3.75v-7.5z" ${st}/>`),
  Codex: tile('#0E8C6E', `<g ${st}><polyline points="12,10 8.5,14 12,18"/><polyline points="16,10 19.5,14 16,18"/></g>`),
  Grok: tile('#111827', `<g ${st} stroke-width="2.4"><line x1="9" y1="9" x2="19" y2="19"/><line x1="19" y1="9" x2="9" y2="19"/></g>`),
  Perplexity: tile('#20808D', `<g ${st}><circle cx="14" cy="14" r="6"/><line x1="14" y1="7" x2="14" y2="21"/><line x1="8.5" y1="10.5" x2="19.5" y2="10.5"/></g>`),
  Cursor: tile('#0B0B0C', `<g ${st}><path d="M14 6.5l6.5 3.75v7.5L14 21.5l-6.5-3.75v-7.5z"/><line x1="14" y1="6.7" x2="14" y2="14"/><line x1="7.7" y1="10.4" x2="14" y2="14"/><line x1="20.3" y1="10.4" x2="14" y2="14"/></g>`),
  Gemini: tile('#4285F4', `<path d="M14 6c.8 4.6 3.4 7.2 8 8-4.6.8-7.2 3.4-8 8-.8-4.6-3.4-7.2-8-8 4.6-.8 7.2-3.4 8-8z" fill="#fff"/>`),
};

export function logo(name: string): string {
  return LOGOS[name] ?? '';
}
