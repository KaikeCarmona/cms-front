import react from "react";
import ScreenOne from "./components/screen1/onescreen";

export default function App(){
  return(
    <>
      <div className="teste">
        <ScreenOne/>
      </div>
      <style jsx>{`
        div.teste{
          display:flex;
          align-items: center;
          height:100vh;
        }
      `}</style>
    </>
  );
}