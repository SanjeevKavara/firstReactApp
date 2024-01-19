
import Counter from './components/Counter'

import objDB from './data/data'
import { useContext, useReducer, useState } from 'react'
import Addvideo from './components/Addvideo'
import Videolist from './components/Videolist'
import ThemeContext from './context/ThemeContext'
import './App.css'
import VideosContext from './context/VideosContext'
import VideoDispatchContext from './context/VideoDispatchContext'



function App() {
  const [editablevideo, setEditablevideo] = useState(null)

  function videoReducer(obj, action) {
    switch (action.type) {
      case 'ADD':
        return [
          ...obj, //this will add the old videos to the new video
          {
            ...action.payload, //this will add the new video to the obj array
            id: obj.length + 1
          } //this will add the id to the new video
        ]
      case 'DELETE':
        return obj.filter((item) => item.id !== action.payload) //this will filter the obj array and will return a new array without the video with the id that was passed to the function and will re-render the component
      case 'UPDATE':
        const index = obj.findIndex((item) => item.id === action.payload.id) //this will find the index of the video with the id that was passed to the function
        const newVideo = [...obj]
        newVideo.splice(index, 1, action.payload) //this will replace the video with the id that was passed to the function with the new video and will re-render the component
        setEditablevideo(null) //this will set the state of the editablevideo to null and will re-render the component

        return newVideo; //this will return the new obj array with the updated video and will re-render the component 

      default:
        return obj
    }

  }

  const [obj, dispatch] = useReducer(videoReducer, objDB)
  // const [obj, setObj] = useState(objDB); //this is a hook that returns an array with 2 elements the first element is the state of the component and the second element is a function that will update the state of the component and will re-render the component

  // function addVideo(video) {
  //   dispatch({ type: 'ADD', payload: video }) //this will add a new video to the obj array and will re-render the component
  //   //action:{type:'add',payload:video}
  //   // setObj() //this will add a new video to the obj array and will re-render the component


  // }

  // function deleteVideo(id) {
  //   // setObj( obj.filter((item)=>item.id !== id)) //this will filter the obj array and will return a new array without the video with the id that was passed to the function and will re-render the component 
  //   dispatch({ type: 'DELETE', payload: id })


  // }

  const theme = useContext(ThemeContext)//this is a hook that returns the value of the context provider and will re-render the component if the value of the context provider changes

  function editVideo(id) {
    setEditablevideo(obj.find((item) => item.id === id))//this will find the video with the id that was passed to the function and will re-render the component


  }

  // function updateVideo(video) {
  //   //this will set the state of the obj to the newVideo
  //   dispatch({ type: 'UPDATE', payload: video })
  // }

  return (
    <ThemeContext.Provider value={null}>
      <VideosContext.Provider value = {obj}>
        <VideoDispatchContext.Provider value={dispatch}>
        <div className={`App ${theme}`}>
          <h1>React Tutorial</h1>
          {/* <Counter></Counter> */}
          <Addvideo  editable={editablevideo}></Addvideo>
          <Videolist  editVideo={editVideo} ></Videolist>

          <div style={{ clear: 'both' }}>  {/* this is to clear the float */}

            {/* <PlayButton  message={'2'} onSmash={(message)=>alert(message)}  ofSmash={(message)=>console.log('paused '+message)} >Pause</PlayButton> */}
          </div>



        </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
