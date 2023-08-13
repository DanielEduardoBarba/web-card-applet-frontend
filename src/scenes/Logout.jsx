import { useEffect } from "react"


export default function Logout(){

useEffect(()=>{
    localStorage.setItem("web-card-user","")
    window.location.href = '/'
},[])
    return(
        <>
        
        </>
    )
}