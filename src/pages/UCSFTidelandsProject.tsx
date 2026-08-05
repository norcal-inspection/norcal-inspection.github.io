import ProjectPage from "@/components/ProjectPage";
import tidelandsImg from "@/assets/ucsf-tidelands.jpg";
import tidelandsEntryImg from "@/assets/tidelands-entry.webp";
import tidelandsInteriorImg from "@/assets/tidelands-interior.webp";

const UCSFTidelandsProject = () => (
  <ProjectPage
    eyebrow="UCSF · San Francisco, CA"
    title="The Tidelands"
    intro="Located in San Francisco's Dogpatch neighborhood, The Tidelands doubles the university's housing capacity in the area, providing 595 affordable units."
    images={[
      { src: tidelandsImg, alt: "The Tidelands" },
      { src: tidelandsEntryImg, alt: "The Tidelands — entry" },
      { src: tidelandsInteriorImg, alt: "The Tidelands — interior" },
    ]}
    scope={[
      "Sited on Minnesota Street just one block from the UCSF Medical Center at Mission Bay, The Tidelands rises across two five-story buildings on a formerly industrial stretch of San Francisco's Dogpatch neighborhood, a district known today for its warehouses-turned-galleries, breweries, and creative energy.",
      "The two buildings total approximately 390,000 gross square feet and offer a mix of efficiency, studio, and two-bedroom units, all furnished and built for the compact, high-efficiency living favored by students balancing coursework, research, and clinical rotations. Shared courtyards, study lounges, and a ground-floor corner market extend the living space beyond each unit's walls.",
      "The project features a prefabricated building envelope system, making it one of UCSF's most energy-efficient buildings to date: an all-electric structure with a facade engineered to maximize natural ventilation, reducing dependence on mechanical cooling even in San Francisco's variable coastal climate.",
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
