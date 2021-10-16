import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import {useMediaQuery} from "react-responsive";
//import {Input} from "semantic-ui-react";

const MobileNav = () => {
  return (<>
<div className="items-center justify-between flex w-full md:hidden">
<div className="w-28">
  <img
    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
    alt="logo"
    className="w-full h-full"
  />
</div>
<div className="flex items-center gap-3">
  <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
  <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
    <FaPizzaSlice />
  </span>
</div>
</div>
  </>);
};

/****************/

const LargeNav = () => {
    return (<>
      <div className="items-center justify-between flex w-full">
      <div className="w-28">
      <img
      src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
      alt="logo"
      className="w-full h-full"
      />
      </div>
      <div className="flex items-center gap-3">
      <input className="p-2 rounded-full mr-10 border border-blue-500 bg-whitesmoke" placeholder="Search" style={{width:"350px"}}/>
      <button className="bg-zomato-400 text-white py-3 px-4 rounded-full mr-10">Use App</button>
      <span className="border p-3 border-blue-500 text-blue-500 rounded-full">
      <FaPizzaSlice />
      </span>
      </div>
      </div>
      </>);
}

/******************/
const Navbar=()=>{
  const isMobile = useMediaQuery({query:"(max-device-width:767px)",});
  const isLargeScreen = useMediaQuery({query:"(min-device-width:768px)",});
  return (
      <nav className="p-4 flex bg-white shadow-md items-center min-width-0 max-width-300">
      {isMobile && <MobileNav />}
      {isLargeScreen && < LargeNav/>}
      </nav>
    )
}

export default Navbar;
