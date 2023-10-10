import { useState } from "react";
import { useAuth } from "../auth";
import "./NewBlogForm.css";


function NewBlogForm() {
    const auth = useAuth();

    const [newBlogValue, setNewBlogValue] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        auth.setNewBlogForm(false);
    };

    const onCancel = () => {
        auth.setNewBlogForm(false);
    };

    const onChange = (event) => {
        setNewBlogValue(event.target.value);
    };


    return (
        <form onSubmit={onSubmit}>
        <label>Ingresa el titulo de tu blog</label>
        <textarea
            placeholder="React Forever"
            onChange={onChange}
            value={newBlogValue}//para que sea obligatorio agregar cualquier caracter y no enviarlo vacio
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
