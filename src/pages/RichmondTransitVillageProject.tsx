import ProjectPage from "@/components/ProjectPage";
import richmondImg from "@/assets/richmond-transit-village.jpg";

const RichmondTransitVillageProject = () => (
  <ProjectPage
    eyebrow="[Client] · [Location]"
    title="Richmond Transit Village"
    intro="[Project description placeholder]"
    images={[{ src: richmondImg, alt: "Richmond Transit Village" }]}
    scope={["[Scope of work placeholder]"]}
    facts={[
      { label: "Client", value: "[Client]" },
      { label: "Location", value: "[Location]" },
      { label: "Square Feet", value: "[Square Feet]" },
      { label: "Architect", value: "[Architect]" },
      { label: "Project Type", value: "[Project Type]" },
      { label: "Project Scope", value: "[Project Scope]" },
      { label: "Market", value: "Civic" },
    ]}
  />
);

export default RichmondTransitVillageProject;
