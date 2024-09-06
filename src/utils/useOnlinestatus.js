import { useEffect, useState } from "react"

const useOnlinetstatus=()=>{
    const [onlinestatus,setonlinestatus]=useState(true)

     useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlinestatus(false) ;
        })
        window.addEventListener("online",()=>{
            setonlinestatus(true) ;
        })
     },[])
     return  onlinestatus

}
export default useOnlinetstatus