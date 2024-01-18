import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Likes } from '@/component/likes';
import { Delete } from '@/component/delete';
import UpdateFactComponent from '@/component/update';
import Create from '@/component/create';



function Myfacts() {
    const router = useRouter();
    const [data, setData] = useState([])
    useEffect(() => {
        const userId = localStorage.getItem('userId')
        const fetchData = async () => {
            try{
                const res = await axios.get(`https://quizapp-0hs0.onrender.com/facts/${userId}`)
                console.log(res)
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    const handleMainButton = () => {
        router.push("/")
    }
    const handleMyFactButton =() => {
        router.push("/myfact")
      }
      const handleDeleteFact = (factId) => {
        const updatedFacts = data.filter((fact) => fact._id !== factId);
        setData(updatedFacts);
      }
      const handleProfileButton = () => {
        router.push("/profile")
      }
    return (
        <div>
            <header>
    <img className="logo" src="https://scalebranding.com/wp-content/uploads/2021/01/1-48.jpgg" ></img>
    <nav>
    <ul className="nav-links">
    <li><a onClick={handleMainButton}>Facts</a></li>
    <li><a onClick={handleMyFactButton}>My Facts</a></li>
    </ul>
    </nav>
    <a className="cta" onClick={handleProfileButton}><button>Profile</button></a>
    </header>
        <h1 className='ungu'>YOUR FACTS</h1>
        <div className='wrapper1'>
        {
            data.map((value) => {
                return(
                    <> 
                    <h1>{value.title}</h1>
                    <div className='fact'>{value.fact}</div>
                    <div className='date'>{value.date}</div>
                    <p><Likes likes={value.likes} factId={value._id}dislikes={value.dislikes}/></p>
                    <p><Delete factId={value._id} onDelete={handleDeleteFact} /></p> 
                    <p><UpdateFactComponent factId={value._id}/></p>
                    <p><Create factId={value._id}/></p>
                    </>
                    )})
                }
                </div>
                </div>
                )
            }
            
            export default Myfacts