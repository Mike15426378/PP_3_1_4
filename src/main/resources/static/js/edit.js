$(document).on('click','.edit',function () {
    let role = '';
    let user = $(this).data('user');
    $.each(user.roles, function (i, userRole) {
        role += userRole.name
    })
    $('#idEditUser').val(user.id);
    $('#usernameEditUser').val(user.username);
    $('#surnameEditUser').val(user.surname);
    $('#ageEditUser').val(user.age);
    $('#emailEditUser').val(user.email);
    $('#passEditUser').val(user.password);
    $('#roleEditUser').val(role)

})

// $.ajax({
//     type: 'PUT',
//     url: '/api/users',
//     data: user,
//     timeout: 3000,
//     success: async function (){
//         await getAllUser()
//     }
// });
