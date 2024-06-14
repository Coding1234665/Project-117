//Create date variable
var date = new Date()
let display_date= "Date:" + date.toLocaleDateString()

//Load HTML DOM
$(document).ready(function () {
    $("display_date").html(display_date)
})
//Define variable to store predicted emotion

let predicted_emotion;
//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

$(function () {
    $("#predict_button").click(function () {

        let input_data = {
            "text": $("#text").val()
        }
        console.log(inout_data)

        $.ajax({
            type: 'POST',
            url: "/predict-emotion",
            data: JSON.stringify(input_data),
            dataType: "json",
            contentType: 'application/json',
            success: function (result) {

                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

                $("#prediction").html(predicted_emotion)
                $('#prediction').css("display", "block");

                $("#emo_img_url").attr('src', emo_url)
                $('#emo_img_url').css("display", "block");
            },
            error: function (result) {
                alert(result.responseJSON.message)
            }
        });
    });
})
//jQuery selector and click action


