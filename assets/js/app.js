$(document).ready(function () {
    BASE_URL = $("#baseurl").val();
    $(".pick").on("click", function () {
        var player_id = $(this).attr("player_id");
        var squad = $("#squad").val();
        if (!squad) {
            alert("Please select the strategy.");
        } else {
            $.ajax({
                url: BASE_URL + "manage/select",
                type: 'POST',
                data: {player_id: player_id},
                dataType: 'json',
                success: function (response) {
                    if (response.error) {
                        alert(response.error);
                    } else {
                        $("#budget").text("$" + response.budget + "m");
                        $(".pick[player_id=" + player_id + "]").addClass('disabled');
                        $("#team").html("").html(response.html);
                    }
                }
            });
        }
    });


    $(document.body).on('click', '.remove', function () {
        var player_id = $(this).attr("player_id");
        $.ajax({
            url: BASE_URL + "manage/remove",
            type: 'POST',
            data: {player_id: player_id},
            dataType: 'json',
            success: function (response) {
                if (response) {
                    $("#budget").text("$" + response.budget + "m");
                    $(".pick[player_id=" + player_id + "]").removeClass('disabled');
                    $("#team").html("").html(response.html);
                }
            }
        });
    });

    $("#squad").on('change', function () {
         var squad = $("#squad").val();
        $.ajax({
            url: BASE_URL + "manage/changeSquad",
            type: 'POST',
            data: {squad:squad},
            dataType: 'json',
            success: function (response) {
                if (response) {
                    location.reload();
                }
            }
        });
    });

});
