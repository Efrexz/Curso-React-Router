import { Link , Outlet} from "react-router-dom";
import { blogsData } from "./blogsData.jsx";

function BlogPage () {

    function BlogLink ({blog}){
        return(
            <Link to={blog.slug}>
                {blog.title}
            </Link>
        )
    }

    return(
        <>
            <h1>Blog</h1>
            <Outlet/>
            <ul>
                {blogsData.map((blog) => (
                    <li key={blog.slug}>
                        <BlogLink blog={blog}/>
                    </li>
                ))}
            </ul>
        </>
    )
}

export { BlogPage };