$(document).on('click','.delete',function () {
    let user = $(this).data('user');
    $('#idDelUser').val(user.id);
    $('#nameDelUser').val(user.username);
    $('#lastNameDelUser').val(user.surname);
    $('#ageDelUser').val(user.age);
    $('#emailDelUser').val(user.email);

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