var appNumber=0;
var appNames = ["signin", "signup", "servicesignup", "resetpassword", "forgotusername", "captcha", "navigation", "express"];
var appUrls = {
    signin: 'http://localhost:8080/signin/colour',
    signup: 'http://localhost:8081/signup/colour',
    servicesignup: 'http://localhost:8082/servicesignup/colour',
    resetpassword: 'http://localhost:8083/resetpassword/colour',
    forgotusername: 'http://localhost:8084/forgotusername/colour',
    captcha: 'http://localhost:8085/captcha/colour',
    navigation: 'http://localhost:8086/navigation/colour',
    express: 'http://localhost:8087/express/colour'
};

$(document).ready(function(){
    refresh();

    $(document).on('click', '.app', function() {
        var $modal = $('#myModal');
        $modal.find('h4').html($(this).find('h2').html());
        $modal.find('#appName').val($(this).find('h2').html());
        $modal.modal('show')
    });

    $("#saveButton").click(function(){
        var color =  $("#html5colorpicker").val();

        saveColor($('#appName').val(), color);

    });
});

function refresh() {
    for (var i = 0; i < appNames.length; i++) {
        var app = appNames[i];

        $.get(appUrls[app], function(data, status) {
            var appName = JSON.stringify(data).substring(2, JSON.stringify(data).indexOf('.'));
            var colour = (data['' + appName + '.colour'] || 'grey');

            $('#' + appName).css('background-color', colour);

//            $('#apps').append('<div class="col-md-6"><div class="well well-lg app "'+ appName + '" style="background-color: ' + (data['' + appName + '.colour'] || 'grey') + '"><span class="pull-right glyphicon glyphicon-pencil"></span><h2>' + appName + '</h2></div></div>');
        });
    }
}

function saveColor(appName, color){
    $.post("http://localhost:8888/configserver/bus/env", '' + appName + ".colour=" + color, function(data, status) {
    });

    setTimeout(function() {
        location.reload();
    }, 200);
}

function getColor(appName){
    $.get(appUrls[appName], function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
}