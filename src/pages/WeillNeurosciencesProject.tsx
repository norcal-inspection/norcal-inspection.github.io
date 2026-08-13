import ProjectPage from "@/components/ProjectPage";
import exteriorImg from "@/assets/weill-exterior.webp";
import stairsImg from "@/assets/weill-stairs.webp";
import interiorImg from "@/assets/weill-interior.webp";

const WeillNeurosciencesProject = () => (
  <ProjectPage
    eyebrow="UCSF · Mission Bay, San Francisco"
    title="Joan and Sanford I. Weill Neurosciences Building"
    intro="The Joan and Sanford I. Weill Neurosciences Building is a world-class research facility at the heart of UCSF's Mission Bay campus, uniting neurology, psychiatry, and neurosurgery research under one roof to advance treatment for conditions like Alzheimer's, dementia, and Huntington's disease."
    images={[
      { src: exteriorImg, alt: "Joan and Sanford I. Weill Neurosciences Building — exterior" },
      { src: stairsImg, alt: "Joan and Sanford I. Weill Neurosciences Building — stairs" },
      { src: interiorImg, alt: "Joan and Sanford I. Weill Neurosciences Building — interior" },
    ]}
    scope={[
      "Located on UCSF's Mission Bay campus, the six-story, 281,800-square-foot building serves as headquarters for the UCSF Weill Institute for Neurosciences. The first two floors house clinical and patient treatment space open to the public, including diagnostic and treatment rooms, an MRI suite, a pharmacy, and an infusion area. Above, four stories of flexible research space — including wet and dry labs, a vivarium, and office pods — form an architecturally distinct volume clad in a glazed curtain wall and wrapped in a screening system that filters daylight while offering privacy for staff and faculty. Designed by Mark Cavagnero Associates, the building is conceived as interlocked volumes, with the research block lifted above a transparent clinical base. A sixth-floor terrace offers sweeping views of the San Francisco skyline, Mission Bay, and the Chase Center.",
    ]}
    facts={[
      { label: "Client", value: "UCSF" },
      { label: "Location", value: "Mission Bay, San Francisco" },
      { label: "Square Feet", value: "281,800" },
      { label: "Architect", value: "Mark Cavagnero Associates" },
      { label: "Project Type", value: ["New Construction", "Public"] },
      { label: "Project Scope", value: ["Ground Up", "Occupancy"] },
      { label: "Market", value: ["Healthcare", "Education"] },
    ]}
  />
);

export default WeillNeurosciencesProject;
