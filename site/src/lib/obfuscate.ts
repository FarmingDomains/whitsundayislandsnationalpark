/**
 * Contact email reveal — base64 chunks joined then atob;
 * first click shows address, second opens mailto.
 * Never put plain-text emails or raw mailto: in HTML (spam scrapers).
 */
export const CONTACT_EMAIL = 'hello@whitsundayislandsnationalpark.com.au';

/** Split base64 of CONTACT_EMAIL (anti-scrape; not encryption) */
export const CONTACT_EMAIL_B64_CHUNKS = (() => {
  const b64 =
    typeof Buffer !== 'undefined'
      ? Buffer.from(CONTACT_EMAIL, 'utf8').toString('base64')
      : btoa(CONTACT_EMAIL);
  const chunks: string[] = [];
  for (let i = 0; i < b64.length; i += 8) chunks.push(b64.slice(i, i + 8));
  return chunks;
})();
