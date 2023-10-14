import { useState } from "react";
import { useAuth } from "../auth";
import { blogsData } from "../blogsData";
import { useModals } from "../ModalProvider.jsx";
import "./NewBlogForm.css";
import { useNavigate } from "react-router-dom";

function NewBlogForm() {
    const navigate = useNavigate();
    const auth = useAuth();
    const modal = useModals();

    const [newBlogTitle, setNewBlogTitle] = useState("");
    const [newBlogDescription, setNewBlogDescription] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        //creamos un nuevo objeto con la informacion del nuevo blog para luego enviarla a la data de blogs y renderizar
        const newBlogInfo = {
            title: newBlogTitle,
            author: auth.user.userName,
            content: newBlogDescription,
            slug: newBlogTitle,
        };
        blogsData.push(newBlogInfo);
        modal.setNewBlogForm(false);
        navigate("/blog")
    };

    const onCancel = () => {
        modal.setNewBlogForm(false);
    };

    const onChangeTitle = (event) => {
        setNewBlogTitle(event.target.value);
    };

    const onChangeDescription = (event) => {
        setNewBlogDescription(event.target.value);
    };


    return (
        <form onSubmit={onSubmit}>
        <label>Ingresa el titulo de tu blog</label>
        <textarea
            placeholder="React Forever"
            onChange={onChangeTitle}
            value={newBlogTitle}
        />

        <label>Ingresa descripcion de tu blog</label>
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
export { NewBlogForm };
