import ProjectPage from "@/components/ProjectPage";
import richmondImg from "@/assets/richmond-transit-village.jpg";
import amtrakImg from "@/assets/rts-amtrak.jpg";
import interiorImg from "@/assets/rts-interior.jpg";

const RichmondTransitVillageProject = () => (
  <ProjectPage
    eyebrow="City of Richmond / BART · Richmond, CA"
    title="Richmond Transit Village & BART Parking Structure"
    intro="Redevelopment of the BART/Amtrak station area from surface parking into a transit-oriented village, delivered in three distinct efforts: two station phases and a separate structured garage."
    images={[
      { src: richmondImg, alt: "Richmond Transit Village" },
      { src: amtrakImg, alt: "Richmond Transit Village — Amtrak platform" },
      { src: interiorImg, alt: "Richmond Transit Village — station interior" },
    ]}
    scope={[
      "Phase I (13,600 SF) rebuilt the station's west side, including a new station building, entry canopy, upper and lower plaza paving, landscaping and irrigation, storm drainage, street improvements, lighting, and an elevator connecting the two plaza levels.",
      "Phase II (38,000 SF), completed in 2018 under Caltrans oversight due to federal transit funding, extended Nevin Avenue to the station's east entrance and added a matching plaza, elevator, entry stair, and bicycle ramp, along with underground utilities, lighting, and landscaping.",
      "Separately, a 311,250 SF, six-level, 771-stall parking structure replaced the displaced surface lot, completed in 2013. Ground-floor retail and Art Deco detailing tie the garage to the historic station, supporting the surrounding 16-acre district of high-density housing and mixed-use space.",
      "Combined, the three components total roughly 363,000 SF, forming one of Contra Costa County's largest transit-oriented redevelopment efforts.",
    ]}
    facts={[
      { label: "Client", value: "City of Richmond / BART" },
      { label: "Location", value: "Richmond, CA" },
      { label: "Square Feet", value: "362,850" },
      { label: "Architect", value: "STV, Inc. + Watry Design, Inc." },
      { label: "Project Type", value: ["Renovation", "New Construction", "Public"] },
      { label: "Project Scope", value: ["Construction", "Post-Construction"] },
      { label: "Market", value: "Civic" },
    ]}
  />
);

export default RichmondTransitVillageProject;
