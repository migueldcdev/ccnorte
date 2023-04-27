
import Webcam from "react-webcam";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function PictureFeed() {
    let photo: any

    const camera = useRef(photo);

    let image: any;
    const navigate = useNavigate()

    async function sendImage() {

        const response = await fetch('https://ccnorte.es/frontend-test-api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'image/jpeg'
            },
            body: image
        })

        const data = await response.json()

        getOutcome(data)
    }

    function getOutcome(data: any) {
        console.log(1, "Data outcome: ", data.summary.outcome)
        if (data.summary.outcome === "Approved") {

            navigate("/", { state: { image: image } })

        } else {
            takePicture()
        }

    }

    async function takePicture() {
        try {
            const photo = camera.current.takePhoto()
            image = photo
            await sendImage()

        } catch (error) {

            setTimeout(takePicture, 1000)
        }
    }

    useEffect(() => {

        takePicture()


    }, [])



    return (
        <div className="bg-black h-screen w-screen">
            <div className="flex flex-col justify-center text-white">
                <div className="w-2/3 md:w-1/2 mx-auto text-center mt-20">
                    <p className="text-2xl font-bold">Take picture</p>
                    <p className="mt-10">Fit your ID card inside the frame. The picture will be taken automatically.</p>
                </div>
            </div>

            <div className="w-80 h-52 mx-auto mt-20 shadow rounded border border-1 border-white">
                <Webcam
                    audio={false}
                    className="w-full h-full"
                    screenshotFormat="image/jpeg"
                                        
                />
                   
                
            </div>

            <div className="flex justify-center">
                <button type="button" className="text-white font-bold px-5 py-3 rounded-full absolute my-20" onClick={() => navigate('/')}>CANCEL</button>
            </div>
        </div>
    )

}

export default PictureFeed
















