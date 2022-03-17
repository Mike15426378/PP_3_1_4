$(document).on('click','.delete',function () {
    let role = '';
    let user = $(this).data('user');
    $.each(user.roles, function (i, userRole) {
        role += userRole.name
    })
    $('#idDelUser').val(user.id);
    $('#nameDelUser').val(user.username);
    $('#lastNameDelUser').val(user.surname);
    $('#ageDelUser').val(user.age);
    $('#emailDelUser').val(user.email);
    $('#roleDelUser').val(role)

    $(document).on("click", "#btnDelUser", function () {
        $.ajax({
            type: 'DELETE',
            url: `/api/user/${user.id}`,
            timeout: 3000,
            success: async function (){
                await getAllUser()
            }
        });
    });
})