import ProjectPage from "@/components/ProjectPage";
import bayAreaMetroImg from "@/assets/bay-area-metro-center.jpg";

const BayAreaMetroCenterProject = () => (
  <ProjectPage
    eyebrow="[Client] · [Location]"
    title="Bay Area Metro Center"
    intro="[Project description placeholder]"
    images={[{ src: bayAreaMetroImg, alt: "Bay Area Metro Center" }]}
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

export default BayAreaMetroCenterProject;
