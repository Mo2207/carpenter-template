import { useContext } from "react";
import { CavaniContext } from "../Context";

const SectionContainer = ({ navName, children }) => {
  const { nav, animation } = useContext(CavaniContext);
  return (
    <div
      className={`cavani_tm_section ${
        nav == navName ? `animated active ${animation}` : "hidden"
      } ${
        navName !== "home" ? 'medium:bg-white' : 'bg-block '
      }`}
      id={navName}
    >
      {children}
    </div>
  );
};
export default SectionContainer;
