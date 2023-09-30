import {  useParams } from "react-router-dom";
import { blogsData } from "./blogsData.jsx";



function BlogPost() {
    const params = useParams();
    console.log(params);

    const blogPost = blogsData.find(post => post.slug === params.slug);

    return(
        <>
            <h1>{blogPost.title}</h1>
            <p>{blogPost.author}</p>
            <p>{blogPost.content}</p>
        </>
    )
}

export { BlogPost};