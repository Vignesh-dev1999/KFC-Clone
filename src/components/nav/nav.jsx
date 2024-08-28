import { useEffect, useState } from "react";
import loc from "../../photos/loc.png"
// import './nav.scss'

function Nav() {
    // const [buttonData,setButtonData] = useState("Set Location")
    // useEffect(() => {
    //     const handleScreen=()=>{

    //         if(window.innerWidth<= 300){
    //             setButtonData("Set")
    //         }else{
    //             setButtonData("Set Location")
    //         }
    //     }
    //     window.addEventListener('resize', handleScreen);

    //     return () => {
    //         window.removeEventListener('resize', handleScreen);
    //     };
    // }, []);
    return (
        <div className="flex p-4 items-center border-b-2 justify-center">
            <img className="mr-2 w-4 h-4" src={loc}></img>
            <p className="text-sm">Allow location access for local store menu and promos</p>
            <button className="flex text-[12px] items-center ml-4  gap-1 bg-black text-white h-5 p-2 py-3 rounded-xl font-bold">Set <span>Location</span></button>
        </div>
    )
}

export default Nav;