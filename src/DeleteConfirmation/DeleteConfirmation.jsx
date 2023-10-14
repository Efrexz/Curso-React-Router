import { useModals } from "../ModalProvider";

function DeleteConfirmation(props) {
    const modal = useModals();

    const onSubmit = (event) => {
        event.preventDefault();
        props.confirmDeletion()//recibimos por parametro la funcion desde BlogPost.jsx y la ejecutamos al aceptar eliminar el blog
        modal.setDeleteConfirmation(false);
    };

    const onCancel = () => {
        modal.setDeleteConfirmation(false);
    };


    return (
        <form onSubmit={onSubmit}>
        <label>¿Seguro desea eliminar el blog?</label>

        <div className="TodoForm-buttonContainer">
            <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
            >
            Cancelar
            </button>

            <button type="submit" className="TodoForm-button TodoForm-button--add">
            Aceptar
            </button>
        </div>
        </form>
    );
}
export { DeleteConfirmation };