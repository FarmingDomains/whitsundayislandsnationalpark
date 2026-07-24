/** Site imagery credits — mostly Wikimedia Commons real photos; reef remains AI. */

export const photoCreditDefault =
  'Most landscape photos on this site are real Creative Commons photographs from Wikimedia Commons (photographers credited on each image). One supporting illustration (fringing reef) is AI-generated for atmosphere and is not an official Queensland Parks photograph. Always verify real conditions on site and with parks.qld.gov.au.';

/** Used by LightboxGallery for Ian-owned wildlife-style credits if present */
export const PHOTO_CREDIT = {
  name: 'Ian Piggott',
  url: 'https://ianpiggott.com',
} as const;

export const photoCredits: Record<string, string> = {
  default: photoCreditDefault,
};
