// modal edit
$(document).on('click','.edit',function () {
    let user = $(this).data('user');
    $('#idEditUser').val(user.id);
    $('#nameEditUser').val(user.username);
    $('#lastNameEditUser').val(user.surname);
    $('#ageEditUser').val(user.age);
    $('#emailEditUser').val(user.email);
    $('#passEditUser').val('');
})