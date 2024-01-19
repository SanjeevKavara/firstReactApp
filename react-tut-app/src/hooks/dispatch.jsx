import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";

function useDispatch(){
    return useContext(VideoDispatchContext) //this will return the dispatch function from the context object 
    
}


export default useDispatch;
