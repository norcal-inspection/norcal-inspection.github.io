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
      { label: "Location", value: "[Location]" },
      { label: "Client", value: "[Client]" },
      { label: "Size", value: "[Size]" },
      { label: "Status", value: "[Status]" },
    ]}
  />
);

export default RichmondTransitVillageProject;
