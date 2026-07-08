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
      { label: "Location", value: "[Location]" },
      { label: "Client", value: "[Client]" },
      { label: "Size", value: "[Size]" },
      { label: "Status", value: "[Status]" },
    ]}
  />
);

export default BayAreaMetroCenterProject;
