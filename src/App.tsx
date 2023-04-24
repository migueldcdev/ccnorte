import NavBar from "./components/NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify center mt-20">
        <div className="w-2/3 md:w-1/2 mx-auto text-center ">
         <p className="text-2xl font-bold">Scan your ID</p>
         <p>Take a picture. It may take time to validate your personal information.</p> 
        </div>
        <div className="w-2/3 md:w-1/2 flex justify-center mx-auto mt-20 shadow rounded py-12 px-2">
            <button className="bg-indigo-800 text-white font-bold py-2 px-4 rounded-full">TAKE PICTURE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
