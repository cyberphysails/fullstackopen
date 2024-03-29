import axios from "axios";

const baseUrl = "http://localhost:30001/persons";

const create = (newPerson) => {
    return axios
        .post(baseUrl, newPerson)
        .then(response => response.data)
}

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(response => response.data)
} 

const remove = (id) => {
    return axios
        .delete(`${baseUrl}\\${id}`)
}

const update = (id, newPerson) => {
    return axios
        .put(`${baseUrl}/${id}`, newPerson)
        .then(response => response.data)
}

export default { create, getAll, remove, update }