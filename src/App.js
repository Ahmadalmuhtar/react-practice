import { useState, useEffect } from "react"
import axios from "axios"

export default function App() {

    const BASE_URL = "https://jsonplaceholder.typicode.com/posts"
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

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

    function postData(e) {
        e.preventDefault();
        axios.post(BASE_URL, { name: name, password: password })
            .then((response) => {
                setName(response.data.name)
            })
            .catch((error) => {
                console.error('Error Posting Data!', error)
                setError("An error occurred while Posting data. Please try again.")
            })
            .finally(() => {
                setName(''); setPassword('');
            })
        console.log('Name: ', name)
        console.log('Password: ', password)
    }

    return (
        <>
            <form onSubmit={postData}>
                <label htmlFor="nameFIeld">
                    <input type="text" id="nameFIeld" value={name} onChange={(e) => setName(e.target.value)} />
                    Name
                </label>
                <label htmlFor="password">
                    <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    Password
                </label>
                <button type="submit">Submit</button>
                {error && <p>{error}</p>}
            </form>

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