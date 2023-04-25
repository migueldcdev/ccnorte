import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

function Home() {

    const navigate = useNavigate()
    const location = useLocation() || false



    function handleClick() {
        navigate("/camara")
    }

    useEffect(() => {
        if (location.state != null) {
            console.log(location.state.image)
        }
    })

    return (
        <div>

            <NavBar />
            <div className="flex flex-col justify center mt-20">
                <div className="w-2/3 md:w-1/2 mx-auto text-center ">
                    <p className="text-2xl font-bold">Scan your ID</p>
                    <p>Take a picture. It may take time to validate your personal information.</p>
                </div>
                <div className="w-2/3 md:w-1/2 flex justify-center mx-auto mt-20 shadow rounded py-12 px-2">
                    <button type="button" className="bg-indigo-800 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleClick()}>TAKE PICTURE</button>

                </div>
            </div>

            <div className="flex justify-center">
                {location.state != null &&
                    <div className="mt-20 flex flex-col justify-center text-center mb-20">
                        <img src={location.state.image} alt="Uploaded image" width={250}/>
                        <p className="text-lime-600 text-2xl font-bold">Success!</p>
                    </div>
                }

            </div>


        </div>

    )
}

export default Home