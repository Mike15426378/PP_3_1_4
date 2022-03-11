async function getUsers() {
    let temp = '';
    const table = document.querySelector('#bodyId');
    await userFetch.findAllUsers()
        .then(res => res.json())
        .then(users => {
            users.forEach(user => {
                temp += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.username}</td>               
                    <td>${user.surname}</td>
                    <td>${user.age}</td>
                    <td>${user.email}</td>
                    <td>${user.role}</td>
                    <td>
                        <button type="button" data-userid="${user.id}" data-action="edit" class="btn btn-info"
                            className data-toggle="modal" data-target="#editModal">Edit</button>
                    </td>
                    <td>
                        <button type="button" data-userid="${user.id}" data-action="delete" class="btn btn-danger"
                            className data-toggle="modal" data-target="#deleteModal">Delete</button>
                    </td>
                </tr>
               `;
            })
            table.innerHTML = temp;

        })

    $("#tableAllUsers").find('button').on('click', (event) => {
        let defaultModal = $('#defaultModal');

        let targetButton = $(event.target);
        let buttonUserId = targetButton.attr('data-userid');
        let buttonAction = targetButton.attr('data-action');

        defaultModal.attr('data-userid', buttonUserId);
        defaultModal.attr('data-action', buttonAction);
        defaultModal.modal('show');
    })
}
