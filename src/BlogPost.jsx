import {  useNavigate, useParams } from "react-router-dom";
import { blogsData } from "./blogsData.jsx";



function BlogPost() {
    const params = useParams();
    const navigate = useNavigate();
    console.log(params);

    const blogPost = blogsData.find(post => post.slug === params.slug);

    function returnToBlogs(){
        navigate("/blog")
    }

    return(
        <>
            <h1>{blogPost.title}</h1>
            <button onClick={returnToBlogs}>Volver a los blogs</button>
            <p>{blogPost.author}</p>
            <p>{blogPost.content}</p>
        </>
    )
}

export { BlogPost};