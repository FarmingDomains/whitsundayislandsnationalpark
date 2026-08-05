/** Primary nav — Plan visit is the header CTA only (not duplicated here).
 * Trailing slashes match Astro static output folders (Apache-friendly).
 */
export const navLinks = [
  { href: '/park/', label: 'Park' },
  { href: '/things-to-do/', label: 'Things to Do' },
  { href: '/trails/', label: 'Walks' },
  { href: '/itineraries/', label: 'Itineraries' },
  { href: '/stay/', label: 'Stay' },
  { href: '/tours/', label: 'Tours' },
  { href: '/gear/', label: 'Gear' },
  { href: '/articles/', label: 'Articles' },
];

export const footerHubLinks = [
  { href: '/park/', label: 'Park overview' },
  { href: '/trails/', label: 'Walks, beaches & lookouts' },
  { href: '/itineraries/', label: 'Itineraries' },
  { href: '/visit/', label: 'Plan your visit' },
  { href: '/stay/', label: 'Where to stay' },
  { href: '/tours/', label: 'Tours & activities' },
  { href: '/maps/', label: 'Maps & downloads' },
  { href: '/gear/', label: 'Gear essentials' },
  { href: '/articles/', label: 'Articles' },
  { href: '/about/', label: 'About this guide' },
];

export const footerLegalLinks = [
  { href: '/disclaimer/', label: 'Disclaimer' },
  { href: '/affiliate-disclosure/', label: 'Affiliate disclosure' },
  { href: '/privacy/', label: 'Privacy' },
  { href: '/terms/', label: 'Terms' },
  { href: '/contact/', label: 'Contact' },
];

/** Re-export portfolio hub + related chips for Layout footer */
export { portfolioHub, relatedSisterParks as portfolioLinks } from './portfolio';
