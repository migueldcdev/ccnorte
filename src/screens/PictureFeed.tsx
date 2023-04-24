
import { Camera } from "react-camera-pro";
import { useRef, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function PictureFeed() {
    let photo: any
    const camera = useRef(photo);
    const [image, setImage] = useState(null);

   useEffect(() => {
    
    while(image == null){
        try {
            setImage(camera.current.takePhoto())     
            console.log(image)       
        } catch (error) {
            console.log(error)
        }
    }
   
   })

  
    return (
        <div>
            <Camera ref={camera} facingMode='environment' errorMessages={{
                noCameraAccessible: undefined,
                permissionDenied: undefined,
                switchCamera: undefined,
                canvas: undefined
            }} />
            <button className="bg-indigo-800 text-white font-bold py-2 px-4 rounded-full" onClick={() => setImage(camera.current.takePhoto())}
               
            >
                Take Picture
            </button>
        </div>
    )

}

export default PictureFeed
















