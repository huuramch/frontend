import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Likes } from '@/component/likes'

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState([])
  
  useEffect(() => {
    const isUserLoggedIn = () => {
      const user = localStorage.getItem("user");
      console.log(user)
      if(!user){
        router.replace("/login")
      }
    }
    const fetchData = async () => {
      try{
        const res = await axios.get('https://quizapp-0hs0.onrender.com/facts')
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    isUserLoggedIn()
    fetchData()
  }, []);
  
  const handleMyFactButton =() => {
    router.push("/myfact")
  }
  
  return (
    <div>
    <header>
    <nav>
    <ul className="nav-links">
    <li><a href="/">Facts</a></li>
    <li><a onClick={handleMyFactButton}>My Facts</a></li>
    </ul>
    </nav>
    <a className="cta" href="#"><button>Profile</button></a>
    </header>
    <div className='wrapper1'>
    {
      data.map((value) => {
        return(
          <> 
          <h1>{value.title}</h1>
          <div className='fact'>{value.fact}</div>
          <div className='date'>{value.date}</div>
          <p><Likes likes={value.likes} factId={value._id}dislikes={value.dislikes}/></p>
          </>
          )})
        }
        </div>
        </div>
        )
      }
      