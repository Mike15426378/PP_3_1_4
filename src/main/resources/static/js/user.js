async function getUser() {
    let temp = '';
    let role = '';
    const table = document.querySelector('#bodyId');
    await userFetch.findUserByUsername()
        .then(res => res.json())
        .then(user => {
            user.roles.forEach(userRole => {
                role += userRole.name + ' '
            })
            console.log(user)
            temp = `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.surname}</td>
                    <td>${user.age}</td>
                    <td>${user.email}</td>
                    <td>${role}</td>
                </tr>
            `;
            table.innerHTML = temp;
        })
}

$(async function () {
    await getUser();
})

const userFetch = {
    head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Referer': null
    },
    findUserByUsername: async () => await fetch(`api/user`)
}
