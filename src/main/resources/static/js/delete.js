$(document).on('click','.delete',function () {
    let user = $(this).data('user');
    $('#idDelUser').val(user.id);
    $('#nameDelUser').val(user.username);
    $('#lastNameDelUser').val(user.surname);
    $('#ageDelUser').val(user.age);
    $('#emailDelUser').val(user.email);

})

// $(document).on('click','#btnDelUser',function () {
//     let user = $(this).data('user');
//     let id = user.id
//     $.ajax({
//         type: 'DELETE',
//         url: `/api/users/${id}`,
//         timeout: 3000,
//         success: async function (){
//             await getAllUser()
//         }
//     });
// })