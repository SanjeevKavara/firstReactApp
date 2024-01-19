import Video from "./Video"
import PlayButton from "./PlayButton"

import useVideoo from "../hooks/Videoos"

function Videolist({editVideo}){
  const videos = useVideoo() //this will return the videos array from the context object 
return(
    <>
{
        videos.map((item) => {
          return <Video key={item.id} id={item.id} clr="green" title={item.title} channel={item.channel} views={item.views} verified={item.verified}  editVideo = {editVideo}>
            <PlayButton id={item.id} onSmash={(id) => console.log('Playing ' + id)} ofSmash={(id) => console.log('paused ' + id)} >{item.title}</PlayButton>
          </Video>
        })

      }

    </>
)
}


export default Videolist