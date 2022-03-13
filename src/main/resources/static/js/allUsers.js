// async function getUsers() {
//     let temp = '';
//     let role = '';
//     const table = document.querySelector('#bodyId');
//     await userFetch.findAllUsers()
//         .then(res => res.json())
//         .then(users => {
//             users.forEach(user => {
//                 user.roles.forEach(userRole => {
//                     role += userRole.name + ' '
//                 })
//                 temp += `
//                 <tr>
//                     <td>${user.id}</td>
//                     <td>${user.username}</td>
//                     <td>${user.surname}</td>
//                     <td>${user.age}</td>
//                     <td>${user.email}</td>
//                     <td>${role}</td>
//                     <td>
//                         <button type="button" class="btn btn-info edit"
//                              data-toggle="modal" data-target="#editModal" >Edit</button>
//                     </td>
//                     <td>
//                         <button type="button" data-userid="${user.id}" data-action="delete" class="btn btn-danger"
//                             className data-toggle="modal" data-target="#deleteModal">Delete</button>
//                     </td>
//                 </tr>`
//                 role = ''
//             })
//             table.innerHTML = temp;
//         })
//
//     $("#bodyId").find('button').on('click', (event) => {
//         let defaultModal = $('#defaultModal');
//
//         let targetButton = $(event.target);
//         let buttonUserId = targetButton.attr('data-userid');
//         let buttonAction = targetButton.attr('data-action');
//
//         defaultModal.attr('data-userid', buttonUserId);
//         defaultModal.attr('data-action', buttonAction);
//         defaultModal.modal('show');
//     })
// }
//
// $(async function () {
//     await getUsers();
// })
//
// const userFetch = {
//     head: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Referer': null
//     },
//     findAllUsers: async () => await fetch('api/users')
// };
