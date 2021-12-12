import { v4 as uuidv4 } from 'uuid'; // for get random unique IDs

let users = [
    {
        id: uuidv4(),
        name: "faris",
        class: "BCA"
    }
];

// get all
export const getUser = (req, res) => {
    res.json(users);
}

// get by Id
export const getUserById = (req, res) => {
    let id = req.params.id;
    let getUser = users.find(user => user.id === id);
    res.send(getUser);
}

// add new user
export const addUser = (req, res) => {
    let newUsers = req.body;
    users.push({id: uuidv4(), ...newUsers});
    res.json(users);
}

// delete user
export const deleteUserById = (req, res) => {
    let id = req.params.id;
    users = users.filter(user => user.id !== id);
    res.send(users);
}

// update user
export const updateUserById = (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let getUser = users.find(user => user.id === id);
    if(body.name) getUser.name = body.name;
    if(body.class) getUser.class = body.class;
    res.send(users);
}