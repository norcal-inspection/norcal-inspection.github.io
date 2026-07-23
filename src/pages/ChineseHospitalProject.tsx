import ProjectPage from "@/components/ProjectPage";
import chineseHospitalImg from "@/assets/chinese-hospital-website.jpg";
import chineseHospitalPatientRoomImg from "@/assets/chinese-hospital-patient-room.webp";
import chineseHospitalNurseStationImg from "@/assets/chinese-hospital-nurse-station.webp";

const ChineseHospitalProject = () => (
  <ProjectPage
    eyebrow="Chinese Hospital · San Francisco, CA"
    title="Chinese Hospital"
    intro="On a small site in the heart of San Francisco's bustling Chinatown district, the Chinese Hospital Replacement project focused on creating a new, seismically sound acute-care facility."
    images={[
      { src: chineseHospitalImg, alt: "Chinese Hospital" },
      { src: chineseHospitalPatientRoomImg, alt: "Chinese Hospital — patient room" },
      { src: chineseHospitalNurseStationImg, alt: "Chinese Hospital — nurse station" },
    ]}
    scope={[
      "Chinatown was a vibrant and bustling urban backdrop for this technically complex and logistically challenging project. According to San Francisco's planning department, Chinatown is the most densely populated area west of Manhattan with 100,000 residents living within a 20-square-block area.",
      "The original Chinese Hospital opened its doors in 1925 and was the birthplace of martial artist and film star Bruce Lee. The original building was demolished to make way for the new, seismically sound acute-care facility, which was constructed adjacent to a 1979 hospital addition that remained fully operational throughout construction. Design highlights throughout the building reinforce the tie to the community and the original building. A vertical glass art installation on the exterior stairwell commemorates the history of the facility, the staff, and the neighborhood.",
      "The hospital houses a new emergency department, 54 patient beds, a 22-bed skilled nursing facility, 4 operating rooms, MRI and imaging suites, a brand-new, all-campus data center, and a roof-top central utility plant – all in 100,000 sq. ft.",
    ]}
    facts={[
      { label: "Client", value: "Chinese Hospital" },
      { label: "Location", value: "San Francisco, CA" },
      { label: "Square Feet", value: "100,000" },
      { label: "Architect", value: "MEI Architects" },
      { label: "Project Type", value: ["Renovation", "Seismic", "Public"] },
      { label: "Project Scope", value: ["Construction", "Move-in Ready"] },
      { label: "Market", value: "Health + Science" },
    ]}
  />
);

export default ChineseHospitalProject;
