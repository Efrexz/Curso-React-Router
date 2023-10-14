import {  useLocation, useNavigate, useParams } from "react-router-dom";
import { blogsData } from "./blogsData.jsx";
import { Modal } from "./Modal/Modal.jsx";
import { DeleteConfirmation } from "./DeleteConfirmation/DeleteConfirmation.jsx";
import { useAuth } from "./auth.jsx";
import { useModals } from "./ModalProvider.jsx";
import { EditForm } from "./EditForm/EditForm.jsx";


function BlogPost() {
    const auth = useAuth();
    const modal = useModals();
    const newSlug = useLocation();//vemos nuestra url que nos devulve un objeto para luego acceder al pathname que contiene el valor de neustra url. Esto sera necesario al momento de ejecutar el .find de nuestro blogPost y cuando editemos el valor nos redirija en la misma pagina que estamos
    console.log(newSlug);

    const params = useParams();
    const navigate = useNavigate();

    //buscamos la informacion del blog de acuerdo a su url slug
    const blogPost = blogsData.find(post => post.slug === params.slug);

    //en caso que no exista este blog nos redirecciona para que no truene la app
    if(!blogPost){ return navigate("/g")}

    //vemos si el usuario ingresado es admin o dueño de alguno de los blogs para que pueda acceder al boton de eliminar
    const canDeleteAndEdit = auth.user?.isAdmin || blogPost.author === auth.user?.userName;

    //funcion a ejecutar al hacer click en boton de regresar a blogs
    function returnToBlogs(){
        navigate("/blog")
    }

    function editBlog(){
        modal.setEditForm(true);
    }

    function confirmDeletion(){
        const postIndex = blogsData.findIndex(post => post.title === blogPost.title);//conseguimos el index del blog actual
        blogsData.splice(postIndex, 1);//eliminamos en el array original el elemento seleccionado
        navigate("/");//enviamos a la pagina principal al usuario
    }

    function confirmEditForm(newEditBlog){
        const postIndex = blogsData.findIndex(post => post.title === blogPost.title);//conseguimos el index del blog actual
        blogsData.splice(postIndex, 1,newEditBlog);//eliminamos en el array original el elemento seleccionado y le agramos el nuevo blog editado
        navigate(`/blog/${params.slug}`)
    }

    function deleteBlog(){
        modal.setDeleteConfirmation(true);
    }

    return(
        <>
            <h1>{blogPost.title}</h1>
            <button onClick={returnToBlogs}>Volver a los blogs</button>
            <p>{blogPost.author}</p>
            <p>{blogPost.content}</p>


            {/*Si es admin o author se genera el boton de eliminar blog */}
            {(canDeleteAndEdit) && (
                <>
                    <button onClick={deleteBlog}>Eliminar BlogPost</button>
                    <button onClick={editBlog}>Editar blogPost</button>
                </>
            )}


            {modal.deleteConfirmation && (
                <Modal>
                    {/*Le enviamos como propiedad la funcion que creamos en este archivo ya que aqui contamos con las variables necesarias para identificar el archivo a eliminar */}
                    <DeleteConfirmation confirmDeletion={confirmDeletion}/>
                </Modal>)}

            {modal.editForm && (
                <Modal>
                    <EditForm confirmEditForm={confirmEditForm} newSlug={newSlug.pathname}/>{/*Enviamos como prop el valor del nuevo slug que luego ingresaremos en nuestro nuevo objeto al editar el blog */}
                </Modal>
            )}
        </>
    )
}

export { BlogPost};