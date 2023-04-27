import React from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";


function PictureFeed() {

    const navigate = useNavigate()

    const videoConstraints = {
        facingMode: "environment"
    };

    const webcamRef = React.useRef(null as any);
    
    const capture = React.useCallback(
        () => {
           sendImage(webcamRef.current.getScreenshot());
        },
        [webcamRef]
    );


    async function sendImage(image: any) {

        const response = await fetch('https://ccnorte.es/frontend-test-api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'image/jpeg'
            },
            body: image
        })

        const data = await response.json()

        getOutcome(data, image)
    }

    function getOutcome(data: any, image: any) {
        
        if (data.summary.outcome === "Approved") {

            navigate("/", { state: { image: image, validated: true } })

        } else {
            navigate("/", { state: { image: image, validated: false } })
        }
    }

    return (
        <div className="bg-black h-screen w-screen">
            <div className="flex flex-col justify-center text-white">
                <div className="w-2/3 md:w-1/2 mx-auto text-center mt-20">
                    <p className="text-2xl font-bold">Take picture</p>
                    <p className="mt-10">Fit your ID card inside the frame. The picture will be taken automatically.</p>
                </div>
            </div>

            <div className="w-80 h-52 mx-auto mt-20 shadow rounded border border-1 border-white overflow-y-hidden">
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    className="w-80 h-54 object-cover"
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                />
            </div>

            <div className="flex justify-center">
                <button type="button" className="text-white font-bold px-5 py-3 rounded-full absolute my-5" onClick={() => capture()}><i className="fa fa-camera"></i></button>
            </div>

            <div className="flex justify-center">
                <button type="button" className="text-white font-bold px-5 py-3 rounded-full absolute my-20" onClick={() => navigate('/')}>CANCEL</button>
            </div>
        </div>
    )

}

export default PictureFeed
















