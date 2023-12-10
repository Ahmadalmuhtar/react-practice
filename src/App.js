import { useState, useEffect } from "react"
import axios from "axios"

export default function App() {

    const BASE_URL = "https://jsonplaceholder.typicode.com/posts"
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)

    const FetchDataComponent = () => {
        setLoading(true)
        axios.get(BASE_URL)
            .then((response) => {
                setPosts(response.data)
                setError(null)
            })
            .catch((error) => {
                console.error('Error Fetching Data!', error)
                setError("An error occurred while fetching data. Please try again.")
            })
            .finally(() => {
                setLoading(false)
            })
    }
    useEffect(() => {
        FetchDataComponent()
    }, [])

    function fetchData() {

    }

    return (
        <>
            <button onClick={fetchData}>Refresh Data</button>

            {loading && <p style={{ color: 'blue' }}>Loading ...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {!loading && !error && posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>
                })
                }
            </ul>
        </>
    )
}