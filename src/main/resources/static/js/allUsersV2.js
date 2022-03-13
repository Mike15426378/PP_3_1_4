$(document).ready(function (){
    getAllUser()
})

function getAllUser(){
    $.ajax({
        type: 'get',
        url: 'api/users',
        response: 'json',
        success: function (data){
            setAdminTable(data)
        }
    })
}

function setAdminTable(result){
    $('#bodyId').empty()
    let role = '';
    $.each(result, function (i, user) {
        $.each(user.roles, function (i, userRole) {
            role += userRole.name + ' '
        })
        $('<tr>').append(
            $('<td>').text(user.id),
            $('<td>').text(user.username),
            $('<td>').text(user.surname),
            $('<td>').text(user.age),
            $('<td>').text(user.email),
            $('<td>').text(role),
            $('<td>').append($('<button>').text("Edit").attr({
                "type": "button",
                "class": "btn btn-info edit",
                "data-toggle": "modal",
                "data-target": "#editModal",
            }).data("user", user)),
            $('<td>').append($('<button>').text("Delete").attr({
                "type": "button",
                "class": "btn btn-danger delete",
                "data-toggle": "modal",
                "data-target": "#delModal",
            }).data("user", user))
        ).appendTo('#bodyId')
        role = ''
    })
}
