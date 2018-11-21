// import uuid from 'uuid'

let id = 0;

export const addContact = (contact) => {
    id = id + 1;
    return {
        type: "ADD_CONTACT",
        payload: {
            ...contact,
            // id: uuid.v4(),
            id,
        },
    };
}

export const deleteTask = (id) => (
    {
        type: "DELETE_CONTACT",
        id

    });

export const editTask = (id,input) => (
    {
        type: "EDIT_TASK",
        id: id,
        input: input,

    });

export const isActive = (num) => ({type: "IS_ACTIVE", id:num,});
