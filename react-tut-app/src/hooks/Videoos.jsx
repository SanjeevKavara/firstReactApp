import { useContext } from "react";
import VideosContext from "../context/VideosContext";


function useVideoo(){
    return useContext(VideosContext) //this will return the dispatch function from the context object 
}


export default useVideoo;