/**
 * Global constants and site configuration.
 *
 * Contains all site-wide settings including metadata, social links,
 * analytics configuration, and localization options.
 *
 * @module src/consts
 */

/**
 * Site metadata for HTML head and SEO
 */
export const metadata = {
  /** Main site title */
  title: "HNC",
  /** Site description for meta tags and search engines */
  description:
    "HNC Network Engineering.",
  /** SEO keywords */
  keywords: "Network, Networking, Engineering, HNC, Bedford, College",
  /** Search engine crawling instructions */
  robots: "index, follow",
  /** Site author name */
  author: "Conor Bell", 
  /** Default social sharing image */
  image: "/images/site-image.jpg",
  /** Open Graph content type */
  type: "website" as const, // 'website' | 'article'
};

/**
 * Site deployment and build configuration
 */
export const config = {
  /** Site's deploy URL - must start with https:// or http:// */
  url: "https://fuzzy-disco-pj5pp7g4g9wg37764-4321.app.github.dev/website/",
  /** Base path for deployment (e.g. "/blog" for GitHub Pages) */
  base: "/website",
  /** Number of blog posts displayed per page */
  postsPerPage: 3,
};

/**
 * Analytics and tracking configuration
 */
export const analytics = {
  /** Plausible Analytics settings */
  plausible: {
    /** Domain to track */
    domain: "",
    /** Self-hosted Plausible instance URL */
    apiHost: "",
  },
  /** Google Tag Manager configuration */
  google: {
    /** GTM container ID */
    id: "GTM-52VX65NP",
  },
};

/**
 * Internationalization and date formatting settings
 */
export const locale = {
  /** Default site locale */
  default: "en-gb",
  /** Date formatting configuration */
  date: {
    /** Locale for date formatting */
    locale: "en-gb",
    /** Intl.DateTimeFormat options */
    options: {
      day: "numeric",
      month: "long",
      year: "numeric",
    } as Intl.DateTimeFormatOptions,
  },
};
