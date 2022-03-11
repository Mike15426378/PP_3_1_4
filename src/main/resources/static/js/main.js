let roleList = [
    {id: 1, role: "ROLE_ADMIN"},
    {id: 2, role: "ROLE_USER"}
]
let isUser = true;

$(async function () {
    await getUsers();
    await createUser();
})

const userFetch = {
    head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Referer': null
    },
    findAllUsers: async () => await fetch('api/users'),
    addNewUser: async (user) => await fetch('api/users', {method: 'POST', headers: userFetch.head, body: JSON.stringify(user)})
};