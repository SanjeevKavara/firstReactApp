import './PlayButton.css'
import { memo, useState } from 'react'

const PlayButton = memo(function PlayButton({ id, children, onSmash, ofSmash }) { //children is a special prop that is used to pass the content between the opening and closing tags of the component
    const [playing, setPlaying] = useState(false);
    function handlerClick(e) {

        e.stopPropagation(); //this will stop the event from bubbling up to the parent element

        if (playing) //if playing is true
        {
            children = 'Play';
            ofSmash(id); //this will call the function passed to the ofSmash prop and will pass the id of the video to the function

        }

        else {
            children = 'Pause';
            onSmash(id);


        }

        setPlaying(!playing);

    }
    return (
        <>
            <button onClick={handlerClick}>{children}: {playing ? '⏸️' : '▶️'}</button>

        </>
    )
})



export default PlayButton