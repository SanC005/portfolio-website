import React, { useEffect, useState } from 'react'
import Lottie from "lottie-react";
// import location from "../79794-world-locations.json";
// import success from "../1127-success.json";
import coding from "../assets/95348-coding-boy.json"
import loadingAnimation from "../assets/loading.json"
import successAnimation from "../assets/success.json"
function Preloader() {
// const [loading, setloading] = useState(undefined);
const style = {
    height: 300,
  };
// useEffect(() => {
//     setTimeout(() => setloading(true), 2000)
//   }, [])

    // const defaultOptions1 = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: location.default,
    //     rendererSettings: {
    //       preserveAspectRatio: "xMidYMid slice",
    //     },
    //   };
      
    //   const defaultOptions2 = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: success.default,
    //     rendererSettings: {
    //       preserveAspectRatio: "xMidYMid slice",
    //     },
    //   };
      return (
        <>
            <div>
                <div className='flex h-screen w-full justify-center items-center'>
            <Lottie animationData={loadingAnimation} style={style}/>;
                </div>

            </div>
        </>
      );
    
}

export default Preloader