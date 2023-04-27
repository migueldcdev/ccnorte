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
            <div className="flex flex-col justify-center mt-10">
                <div className="w-2/3 md:w-1/2 mx-auto text-center ">
                    <p className="text-2xl font-bold">Scan your ID</p>
                    <p className="mt-10">Take a picture. It may take time to validate your personal information.</p>
                </div>
                <div className="w-80 h-52 flex justify-center mx-auto mt-20 shadow rounded relative">
                    <button type="button" className="bg-indigo-900 text-white font-bold px-5 py-3 rounded-full absolute my-20" onClick={() => handleClick()}>TAKE PICTURE</button>
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