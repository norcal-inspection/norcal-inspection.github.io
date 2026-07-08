import ProjectPage from "@/components/ProjectPage";
import elevationImg from "@/assets/ucsf-helen-diller-elevation.avif";
import entranceImg from "@/assets/ucsf-helen-diller-entrance.avif";
import streetViewImg from "@/assets/ucsf-helen-diller-street-view.avif";

const HelenDillerProject = () => (
  <ProjectPage
    eyebrow="UCSF Health · Parnassus Heights"
    title="UCSF Health Helen Diller Hospital"
    intro="A new 15-story acute care hospital on the Parnassus Heights campus, paired with renovation and seismic upgrades to existing UCSF facilities."
    images={[
      { src: elevationImg, alt: "UCSF Helen Diller Hospital — elevation view from Mount Sutro" },
      { src: entranceImg, alt: "UCSF Helen Diller Hospital — main entrance at street level" },
      { src: streetViewImg, alt: "UCSF Helen Diller Hospital — street view looking up at tower" },
    ]}
    scope={[
      "The project centers on a new 15-story, approximately 900,000 gross square foot hospital building delivering roughly 336 patient beds, with expanded emergency department, imaging, and surgical services for the Parnassus Heights campus.",
      "Alongside the new tower, the scope includes the renovation of approximately 114,000 gross square feet within the existing Moffitt and Long Hospitals to enhance inpatient clinical services and address the campus's growing patient capacity needs.",
      "Structural and infrastructure work includes a new 15-story exterior stair at Moffitt Hospital and a seismic upgrade enabling Moffitt to support acute care services beyond 2030.",
    ]}
    facts={[
      { label: "Location", value: "Parnassus Heights, San Francisco" },
      { label: "Client", value: "UCSF Health" },
      { label: "Tower", value: "15 stories" },
      { label: "New Construction", value: "~900,000 GSF" },
      { label: "Patient Beds", value: "~336" },
      { label: "Renovation", value: "~114,000 GSF" },
    ]}
  />
);

export default HelenDillerProject;
