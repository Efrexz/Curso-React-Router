import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {

    const [ newBlogForm, setNewBlogForm] = useState(false);
    const [ editForm , setEditForm] = useState(false);
    const [ deleteConfirmation , setDeleteConfirmation] = useState(false);

    return (
        <ModalContext.Provider
        value={{
            newBlogForm,
            setNewBlogForm,
            editForm,
            setEditForm,
            deleteConfirmation,
            setDeleteConfirmation
        }}
        >
        {children}
        </ModalContext.Provider>
    );
    }

function useModals() {
    const modals = useContext(ModalContext);
    return modals;
    }

export { ModalProvider, useModals };