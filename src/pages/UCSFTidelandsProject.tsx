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
      { label: "Location", value: "[Location]" },
      { label: "Client", value: "[Client]" },
      { label: "Size", value: "[Size]" },
      { label: "Status", value: "[Status]" },
    ]}
  />
);

export default UCSFTidelandsProject;
