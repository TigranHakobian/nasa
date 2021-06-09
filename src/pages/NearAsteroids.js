import React,{useState,useEffect} from 'react'
import axios from "axios";
import Pagination from "../components/Pagination";


export default function NearAsteroids() {
    const [post,setPost] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const  [postPerPage] = useState(10)

    useEffect(()=>{
        const fetchPosts = async () =>{
            setLoading(true)
            const  res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPost(res.data)
            setLoading(false)
        }
        fetchPosts(post)
    },[])

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const  currentPosts = post.slice(indexOfFirstPost,indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            {loading?<h2>loading...</h2>
                :<ul className="list-group mb-4">
                    {currentPosts.map(post =>(
                        <li key={post.id} className={"list-group-item"}>
                            {post.title}
                        </li>
                    ))}
                 </ul>}
                 <Pagination postPerPage={postPerPage} totalPosts={post.length} paginate={paginate} />
        </div>
    )
}


