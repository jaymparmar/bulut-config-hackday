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
    setInterval(refresh, 1000);
});

function refresh() {
//    $('#apps').html('');

    for (var i = 0; i < appNames.length; i++) {
        var app = appNames[i];

        $.get(appUrls[app], function(data, status) {
            var appName = JSON.stringify(data).substring(2, JSON.stringify(data).indexOf('.'));
            var colour = (data['' + appName + '.colour'] || 'grey');

            $('#' + appName).css('background-color', colour);
//            $('#apps').append('<div class="col-md-6"><div class="well well-lg app" style="background-color: ' + (data['' + appName + '.colour'] || 'grey') + '"><h2>' + appName + '</h2></div></div>');
        });
    }
}
