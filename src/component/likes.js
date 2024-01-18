import axios from "axios"
import { useState } from "react"

export const Likes  = ({likes,dislikes, factId}) => {
    const [factLikes, setFactLikes] = useState(likes)
    const [factDisLikes, setFaceDisLikies] = useState(dislikes)
    const userId = localStorage.getItem('userId')
    
    const handleAddLikesButton = async() => {
        await axios.post(`https://quizapp-0hs0.onrender.com/addLikes/${factId}/${userId}`).then((res) => {
        console.log(res)
        setFaceDisLikies(res.data.dislikes)
        setFactLikes(res.data.likes)
    })
}

const handleAddDisLikesButton = async() => {
    await axios.post(`https://quizapp-0hs0.onrender.com/addDislikes/${factId}/${userId}`).then((res) => {
    console.log(res)
    setFaceDisLikies(res.data.dislikes)
    setFactLikes(res.data.likes)
})
}
return (
    <div>
    <p>Likes: {factLikes.length}<button onClick={handleAddLikesButton}>Add Likes</button></p>
    <p>DisLikes: {factDisLikes.length}<button onClick={handleAddDisLikesButton}>Add DisLikes</button></p>
    </div>
    )
}