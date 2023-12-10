import { useEffect, useState } from "react"
import axios from "axios"

export default function App() {
  // const BASE_URL = "https://jsonplaceholder.org/posts"

  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(false)
  const [postId, setPostId] = useState()
  const [message, setMessage] = useState('Please Enter a valid ID.')


  // useEffect(() => {
  //   const fetchPost = () => {
  //     setLoading(true)
  //     axios.get("https://jsonplaceholder.org/posts")
  //       .then((response) => {
  //         console.log(response.data)
  //         setPost(response.data)
  //       })
  //       .catch((error) => { console.log(error) })
  //       .finally(() => { setLoading(false) })
  //   }
  //   fetchPost()
  // }, [])

  if (loading) {
    return <p>Loading</p>
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fetchPostById = () => {
      axios.get(`https://jsonplaceholder.org/posts/${postId}`)
        .then((response) => {
          setPost(response.data)
        })
        .catch((error) => { console.log(error) })
        .finally(() => { setLoading(false) })
    }
    if (postId > 0) {
      fetchPostById();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Enter a valid post Id" onChange={(e) => setPostId(e.target.value)} />
        <button type="submit" disabled={postId > 0 ? false : true} >
          Enter
        </button>
      </form>
      <p>{postId <= 0 ? message : post?.slug}</p>
    </>
  )
}