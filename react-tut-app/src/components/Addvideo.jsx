import useDispatch from '../hooks/dispatch';
import './Addvideo.css';
import { useContext, useEffect, useRef, useState } from 'react';


const initial = { 
channel: 'new channel',
verified: true,
title:'',
views:''}

function Addvideo({editable}){
    

    const [video,setVideo] = useState(initial)
    const dispatch = useDispatch()

    const inputRef = useRef(null) //this will create a ref object that will be used to focus on the input field when the component is rendered 

function handleSubmit(e) {
    e.preventDefault();  //this will prevent the default behaviour of the form which is to refresh the page
    if(editable){ //this will check if the editable object is not empty
        dispatch({ type: 'UPDATE', payload: video }) //this will update the video with the id that was passed to the function with the new video and will re-render the component

    }
    else{

        dispatch({ type: 'ADD', payload: video })
    }
    
    setVideo(initial) 
    // console.log(video);
}


function handleChange(e){
    // console.log(e.target.value); //this will print the value of the input field 
    // console.log(e.target.name); //this will print the name of the input field 
    setVideo({...video, [e.target.name]: e.target.value})
   


}
useEffect(()=>{
    if(editable){ //this will check if the editable object is not empty
        setVideo(editable) //this will set the state of the video to the editable object
    }
 //this will set the state of the video to the editable object
 inputRef.current.focus()

},[editable])

return(
    <form>
        <input ref = {inputRef} type="text" name='title' placeholder='title' onChange={handleChange} value = {video.title} />
        <input type="text" name='views' placeholder='views' onChange={handleChange} value = {video.views}/>
        <div>
        <button
            onClick={handleSubmit} //this will add a new video to the obj array and will re-render the component

        //  onClick={() => { //this will add a new video to the obj array and will re-render the component 

        //   setObj([...obj, 
        //     { id: obj.length + 1, 
        //     title: 'new video', 
        //     channel: 'new channel',
        //      views: '1m',
        //       verified: false
        //      }])  //this will add a new video to the obj array and will re-render the component 
        // }}
        >{editable?'Edit':'Add'} Video</button>
      </div>
    </form>
)

}



export default Addvideo;