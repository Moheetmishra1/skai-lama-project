import { useContext } from "react";
import { CreateFileContext } from "../Components/Projects";

const useCustomCreateFileContext=()=>{
    let {ProjectsCreateFile,setPCF} = useContext(CreateFileContext)
    return {ProjectsCreateFile,setPCF}
}

export {useCustomCreateFileContext}