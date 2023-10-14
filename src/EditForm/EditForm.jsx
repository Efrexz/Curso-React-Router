import { useState } from "react";
import { useAuth } from "../auth";
import { useModals } from "../ModalProvider.jsx";

function EditForm(props) {
    const auth = useAuth();
    const modal = useModals();
    const slug = props.newSlug.split("/")[2];//recibimos el string de nuestra url actual y la convertimos en string y luego accedemos a la posicion que contiene nuestro slug


    const [newBlogTitle, setNewBlogTitle] = useState("");
    const [newBlogDescription, setNewBlogDescription] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        //creamos un nuevo objeto con la informacion del nuevo blog para luego enviarla a la data de blogs y renderizar
        const newBlogInfo = {
            title: newBlogTitle,
            author: auth.user.userName,
            content: newBlogDescription,
            slug,//le enviamos el valor del nuevo slug para que nos redirija correctamente
        };
        props.confirmEditForm(newBlogInfo)
        modal.setEditForm(false);
    };

    const onCancel = () => {
        modal.setEditForm(false);
    };

    const onChangeTitle = (event) => {
        setNewBlogTitle(event.target.value);
    };

    const onChangeDescription = (event) => {
        setNewBlogDescription(event.target.value);
    };


    return (
        <form onSubmit={onSubmit}>
        <label>Ingresa el nuevo titulo de tu blog</label>
        <textarea
            placeholder="React Forever"
            onChange={onChangeTitle}
            value={newBlogTitle}
        />

        <label>Ingresa la nueva descripcion de tu blog</label>
        <textarea
            placeholder="React es lo maximo si o que xD"
            onChange={onChangeDescription}
            value={newBlogDescription}
        />

        <div className="TodoForm-buttonContainer">
            <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
            >
            Cancelar
            </button>

            <button type="submit" className="TodoForm-button TodoForm-button--add">
            Añadir
            </button>
        </div>
        </form>
    );
}
export { EditForm };