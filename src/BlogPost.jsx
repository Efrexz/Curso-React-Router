import {  useNavigate, useParams } from "react-router-dom";
import { blogsData } from "./blogsData.jsx";
import { Modal } from "./Modal/Modal.jsx";
import { DeleteConfirmation } from "./DeleteConfirmation/DeleteConfirmation.jsx";
import { useAuth } from "./auth.jsx";


function BlogPost() {
    const auth = useAuth();
    const params = useParams();
    const navigate = useNavigate();

    //buscamos la informacion del blog de acuerdo a su url slug
    const blogPost = blogsData.find(post => post.slug === params.slug);

    //vemos si el usuario ingresado es admin o dueño de alguno de los blogs para que pueda acceder al boton de eliminar
    const canDelete = auth.user?.isAdmin || blogPost.author === auth.user?.userName;

    //funcion a ejecutar al hacer click en boton de regresar a blogs
    function returnToBlogs(){
        navigate("/blog")
    }

    function confirmDeletion(){
        const postIndex = blogsData.findIndex(post => post.title === blogPost.title);//conseguimos el index del blog actual
        blogsData.splice(postIndex, 1);//eliminamos en el array original el elemento seleccionado
        navigate("/");//enviamos a la pagina principal al usuario
    }

    function deleteBlog(){
        auth.setDeleteConfirmation(true);
    }

    return(
        <>
            <h1>{blogPost.title}</h1>
            <button onClick={returnToBlogs}>Volver a los blogs</button>
            <p>{blogPost.author}</p>
            <p>{blogPost.content}</p>

            {/*Si es admin o author se genera el boton de eliminar blog */}
            {(canDelete) && (
                <button onClick={deleteBlog}>Eliminar BlogPost</button>
            )
            }

            {auth.deleteConfirmation && (
                <Modal>
                    {/*Le enviamos como propiedad la funcion que creamos en este archivo ya que aqui contamos con las variables necesarias para identificar el archivo a eliminar */}
                    <DeleteConfirmation confirmDeletion={confirmDeletion}/>
                </Modal>)}
        </>
    )
}

export { BlogPost};