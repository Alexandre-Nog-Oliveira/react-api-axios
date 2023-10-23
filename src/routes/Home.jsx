import React from 'react'
import "./Home.css";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


const Home = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async() =>{
    
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

      const data = response.data
      console.log(data)

    }catch(error){
      console.log(error)
    }

  }

  useEffect(() =>{

    getPosts();

  }, [])

  return (
    <div>Home</div>
  )
}

export default Home