import { memo, useContext, useEffect } from 'react';
import './Video.css'
import VideoDispatchContext from '../context/VideoDispatchContext';
import useDispatch from '../hooks/dispatch';


const Video = memo(function Video({title,channel="nochan",views,verified = false,id,children,editVideo}) {  // props is an object that contains all the properties of the component
    //destructuring the props object
    
    let channelJSX;
    // if (verified) {
    //     channelJSX = <div className="channel">{channel}✅</div>;
    // } else {
    //     channelJSX = <div className="channel">{channel}</div>;
    // }

   const dispatch = useDispatch() 


//    useEffect(()=>{
//     const idx = setInterval(()=>{
//         console.log('hello',id)
//     },5000)

//     return ()=>{
//         clearInterval(idx) } //this will clear the interval when the component is unmounted 
//     },[id]) //this will run the useEffect only when the id changes 

    let url = `https://picsum.photos/id/${id}/200/300`
    return (
        <>
        <div className="container">
            <button className="close" onClick={()=>dispatch({ type: 'DELETE', payload: id })}>x</button>
            <button className="edit" onClick={()=>editVideo(id)}>edit</button>
            <div><img
                src={url}
                alt="Katherine Johnson"
            /></div>
            <div className="title">{title}</div>
            {verified ? <div className="channel">{channel}✅</div> : <div className="channel">{channel}</div>}
            <div className="views">{views} views <span>.</span></div>
             {/* props the name given eg titlename will be the key name of the of the value react or node*/}
            {children} 
        </div>
        </>
    );
})


export default Video;