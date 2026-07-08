import ProjectPage from "@/components/ProjectPage";
import chabotImg from "@/assets/chabot-college.jpg";

const ChabotCollegeProject = () => (
  <ProjectPage
    eyebrow="[Client] · [Location]"
    title="Chabot College"
    intro="[Project description placeholder]"
    images={[{ src: chabotImg, alt: "Chabot College" }]}
    scope={["[Scope of work placeholder]"]}
    facts={[
      { label: "Location", value: "[Location]" },
      { label: "Client", value: "[Client]" },
      { label: "Size", value: "[Size]" },
      { label: "Status", value: "[Status]" },
    ]}
  />
);

export default ChabotCollegeProject;
