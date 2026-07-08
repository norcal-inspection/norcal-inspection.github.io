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
      { label: "Location", value: "[Location]" },
      { label: "Client", value: "[Client]" },
      { label: "Size", value: "[Size]" },
      { label: "Status", value: "[Status]" },
    ]}
  />
);

export default ChineseHospitalProject;
