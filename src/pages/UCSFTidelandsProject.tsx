import ProjectPage from "@/components/ProjectPage";
import tidelandsImg from "@/assets/ucsf-tidelands.jpg";
import tidelandsEntryImg from "@/assets/tidelands-entry.webp";
import tidelandsInteriorImg from "@/assets/tidelands-interior.webp";

const UCSFTidelandsProject = () => (
  <ProjectPage
    eyebrow="UCSF · San Francisco, CA"
    title="The Tidelands"
    intro="UC San Francisco The Tidelands student housing provides 595 affordable units, doubling the university's housing capacity in the area."
    images={[
      { src: tidelandsImg, alt: "The Tidelands" },
      { src: tidelandsEntryImg, alt: "The Tidelands — entry" },
      { src: tidelandsInteriorImg, alt: "The Tidelands — interior" },
    ]}
    scope={[
      "Located in San Francisco's Dogpatch neighborhood, the Tidelands is UCSF's most sustainable housing community. The project provides 595 below-market-rate micro-apartments for over 700 medical students and trainees.",
      "A context-friendly response to San Francisco's urgent need for high-density, affordable housing, the project draws on its formerly industrial but rapidly evolving urban context to create a convivial, sustainable, humane, and functional home for fixed-income emerging medical professionals.",
    ]}
    facts={[
      { label: "Client", value: "UCSF" },
      { label: "Location", value: "San Francisco, CA" },
      { label: "Square Feet", value: "390,000" },
      { label: "Architect", value: "Kieran Timberlake" },
      { label: "Project Type", value: ["New Building", "Public", "Housing"] },
      { label: "Project Scope", value: ["Construction", "Move-in Ready"] },
      { label: "Market", value: "Civic" },
    ]}
  />
);

export default UCSFTidelandsProject;
