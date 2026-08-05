/** Site-wide content freshness labels + publisher E-E-A-T constants */

export const contentMeta = {
  /** Display / ISO date YYYY-MM-DD */
  siteReviewed: '2026-08-06',
  siteReviewedIso: '2026-08-06',
  accuracyNote:
    'Camping fees, track status, boat access, marine park rules, stinger risk and weather windows change. Always verify with Queensland Parks (parks.qld.gov.au), GBRMPA and current marine forecasts before you travel.',
};

/** Publisher identity — About, articles, schema */
export const publisher = {
  name: 'Ian Piggott',
  org: 'Farming Domains',
  abn: '66 786 225 704',
  url: 'https://ianpiggott.com',
  orgUrl: 'https://farmingdomains.com',
  role: 'Independent publisher of practical Australian national park visitor guides',
  personName: 'Ian Piggott',
  personUrl: 'https://ianpiggott.com',
  organizationName: 'Farming Domains',
  organizationUrl: 'https://farmingdomains.com',
} as const;

/** Format a YYYY-MM-DD date for visible “Last reviewed” stamps */
export function formatReviewed(isoDate: string): { iso: string; label: string } {
  const iso = isoDate.slice(0, 10);
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) {
    return { iso, label: iso };
  }
  const label = d.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return { iso, label };
}
