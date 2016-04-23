var app = angular.module('app', ['ngRoute']);


/****************** Controller for Home Page *******************/
app.controller('homeController', function ($scope, $location) {

    /****************** On Load *******************/
    $scope.onLoad = function () {
        $scope.welcome = "Welcome to Angular plus Dotnet Demo.";
    }

    /***************AJAX Call  *****************/
    function makeAjaxCall(parameter) {
        $.ajax({
            type: 'POST',
            url: "../controls/login.ashx?methodName=" + parameter.method,
            data: parameter,
            dataType: 'json',
            success: function (response) {
                if (response.IsSuccess) {
                    eval(response.CallBack + '(response.Data, response.Message)');
                }
                else {
                    swal({
                        title: "ERROR",
                        text: response.Message,
                        type: "error",
                        confirmButtonClass: 'btn-danger',
                    });
                }
            },
            error: function () {

            }
        })
    }
});

