$(document).on("click", "#btnNewUser", function () {
    $('#table-tab').trigger('click');
    let user = $("#formAddUser").serializeArray();
    $('#nameNewUser').val('');
    $('#surnameNewUser').val('');
    $('#ageNewUser').val('');
    $('#emailNewUser').val('');
    $('#passNewUser').val('');
    $('#rolesNewUser').val('');

    $.ajax({
        type: 'POST',
        url: '/api/addUser',
        data: user,
        timeout: 3000,
        success: async function (){
             await getAllUser()
        }
    });
});