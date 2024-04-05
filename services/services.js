import { endpoint } from "../config"


export const getUsers = async () => {
    let users = await fetch(endpoint);

    let result = await users.json();

    return result.users;

}