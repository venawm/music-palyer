import React, { useDebugValue } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({setLibraryStatus,libraryStatus})=>{

    return(
       <div className="navbar">
           <h1>Music App</h1>
           <button onClick={()=>{
               setLibraryStatus(!libraryStatus);
               
           }} ><FontAwesomeIcon icon={faMusic} className="nav" /> Library</button>
           
       </div>

    )



}

export default Nav;