import ProjectPage from "@/components/ProjectPage";
import exteriorImg from "@/assets/uc-law-exterior.jpg";
import interiorImg from "@/assets/uc-law-interior.jpg";
import classroomImg from "@/assets/uc-law-classroom.jpg";

const UCLawSanFranciscoProject = () => (
  <ProjectPage
    eyebrow="UC Law · San Francisco, CA"
    title="UC Law San Francisco"
    intro="A 14-story mixed-use development in San Francisco's Civic Center, The Academe at 198 delivers below-market graduate student housing alongside academic and retail space for UC Law San Francisco."
    images={[
      { src: exteriorImg, alt: "UC Law San Francisco — exterior" },
      { src: interiorImg, alt: "UC Law San Francisco — interior" },
      { src: classroomImg, alt: "UC Law San Francisco — classroom" },
    ]}
    scope={[
      "Located at 198 McAllister Street, The Academe at 198 is Phase 2 of UC Law SF's Academic Village, developed in partnership with Greystar. The 365,000-square-foot building provides 656 units of furnished housing for UC Law SF students and partner institutions, supported by resident amenities including study rooms, a fitness center, an indoor/outdoor lounge, and a dog run. The lower floors house roughly 50,000 square feet of academic space — including classrooms, an auditorium, and trial and appellate courtrooms — plus ground-floor retail. Construction began in September 2020, and the project delivered in 2023.",
    ]}
    facts={[
      { label: "Client", value: "UC Law San Francisco" },
      { label: "Location", value: "San Francisco, CA" },
      { label: "Square Feet", value: "356,000" },
      { label: "Architect", value: "Perkins + Will" },
      { label: "Project Type", value: ["New Construction", "Public"] },
      { label: "Project Scope", value: ["Ground up", "Occupancy"] },
      { label: "Market", value: ["Education", "Residential"] },
    ]}
  />
);

export default UCLawSanFranciscoProject;
