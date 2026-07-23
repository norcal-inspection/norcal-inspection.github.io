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
      { label: "Client", value: "[Client]" },
      { label: "Location", value: "[Location]" },
      { label: "Square Feet", value: "[Square Feet]" },
      { label: "Architect", value: "[Architect]" },
      { label: "Project Type", value: "[Project Type]" },
      { label: "Project Scope", value: "[Project Scope]" },
      { label: "Market", value: "Education" },
    ]}
  />
);

export default ChabotCollegeProject;
