import styles from "../style";
import { useTranslation } from "react-i18next";
import ProjectPreview from "./ProjectPreview";

const Works = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <div> <ProjectPreview /> </div>
    </div>
    
  )
}

export default Works