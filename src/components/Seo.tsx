import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://norcalinspection.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SeoProps {
  /** Page-specific title. The site name is appended automatically. */
  title: string;
  /** Meta description, ~150–160 characters. */
  description: string;
  /** Keep this route out of search indexes (used for placeholder pages). */
  noindex?: boolean;
}

/**
 * Per-route <head> tags. Because the site is a client-rendered SPA, this is what
 * gives each URL a unique title, description, and canonical link.
 */
const Seo = ({ title, description, noindex = false }: SeoProps) => {
  const { pathname } = useLocation();
  const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;
  const fullTitle =
    title === "Nor Cal Inspections"
      ? title
      : `${title} — Nor Cal Inspections`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Nor Cal Inspections" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
};

export default Seo;
