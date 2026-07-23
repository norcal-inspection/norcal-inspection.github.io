import ProjectPage from "@/components/ProjectPage";
import tidelandsImg from "@/assets/ucsf-tidelands.jpg";

const UCSFTidelandsProject = () => (
  <ProjectPage
    eyebrow="[Client] · [Location]"
    title="UCSF Tidelands"
    intro="[Project description placeholder]"
    images={[{ src: tidelandsImg, alt: "UCSF Tidelands" }]}
    scope={["[Scope of work placeholder]"]}
    facts={[
      { label: "Client", value: "[Client]" },
      { label: "Location", value: "[Location]" },
      { label: "Square Feet", value: "[Square Feet]" },
      { label: "Architect", value: "[Architect]" },
      { label: "Project Type", value: "[Project Type]" },
      { label: "Project Scope", value: "[Project Scope]" },
      { label: "Market", value: "Healthcare" },
    ]}
  />
);

export default UCSFTidelandsProject;
