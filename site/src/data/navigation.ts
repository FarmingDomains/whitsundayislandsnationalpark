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

/** Cross-promo portfolio parks (Farming Domains) — exclude this site */
export const portfolioLinks = [
  { href: 'https://www.whitsundayislandsnationalpark.com.au/', label: 'Whitsunday Islands NP' },
  { href: 'https://www.cradlemountainnationalpark.com.au/', label: 'Cradle Mountain NP' },
  { href: 'https://www.portcampbellnationalpark.com.au/', label: 'Port Campbell NP' },
  { href: 'https://greatotwaynationalpark.com.au/', label: 'Great Otway NP' },
  { href: 'https://www.bluemountainsnationalpark.com.au/', label: 'Blue Mountains NP' },
  { href: 'https://springbrooknationalpark.com.au/', label: 'Springbrook NP' },
  { href: 'https://www.royalnationalpark.com.au/', label: 'Royal National Park' },
  { href: 'https://www.sydneyharbournationalpark.com.au/', label: 'Sydney Harbour NP' },
  { href: 'https://www.farmingdomains.com/', label: 'Farming Domains' },
];
