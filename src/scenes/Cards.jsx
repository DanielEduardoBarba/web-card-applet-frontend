import { useEffect, useState } from "react"
import { API_SERVER } from "../config.js"
import { getUserObj } from "../scripts.js"
import Card from "../components/Card.jsx"

export default function Cards({user}){
    const [cards,setCards] = useState([])


    useEffect(()=>{
    
        user = getUserObj()
        // console.log("CARDS comp USER: ", user)
        if(!user){
            window.location.href="/"
            return
        }
         console.log("PASSED CARDS: ", user)

        fetch(`${API_SERVER}/cards/${user.uid}`)
        .then(incoming=>incoming.json())
        .then(data=>{
            setCards(data)
            console.log(data)
        })
        .catch(console.error)

    },[])
    return(
        <>
            {
                cards
                    ?cards.map((c,i)=><Card key={i} c={c}/>)
                    :""
            }
        </>
    )
}