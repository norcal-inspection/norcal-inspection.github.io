import ProjectPage from "@/components/ProjectPage";
import chineseHospitalImg from "@/assets/chinese-hospital-website.jpg";

const ChineseHospitalProject = () => (
  <ProjectPage
    eyebrow="[Client] · [Location]"
    title="Chinese Hospital"
    intro="[Project description placeholder]"
    images={[{ src: chineseHospitalImg, alt: "Chinese Hospital" }]}
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

export default ChineseHospitalProject;
