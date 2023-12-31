import { Link , Outlet} from "react-router-dom";
import { blogsData } from "./blogsData.jsx";
import { Modal } from "./Modal/Modal.jsx";
import { NewBlogForm } from "./NewBlogForm/NewBlogForm.jsx";
import { useModals } from "./ModalProvider.jsx";
import { useAuth } from "./auth.jsx";


function BlogPage () {
    const auth = useAuth();
    const modal = useModals();

    function openFormNewBlog(){
        modal.setNewBlogForm(true)
    }

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

            {modal.newBlogForm && <Modal><NewBlogForm>Agregar Blog</NewBlogForm></Modal>}
            {auth.user && (
                <button
                    onClick={openFormNewBlog}>
                        Crear nuevo Blog
                </button>)}
        </>
    )
}

export { BlogPage };