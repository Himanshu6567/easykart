import React from "react";
import { ImSpinner9 } from "react-icons/im";

function Loading() {
  return (
    <div class="flex justify-center items-center text-7xl text-primary-dark"><ImSpinner9 className="animate-spin"/>
      
    </div>   
 ); 
}
export default Loading;
