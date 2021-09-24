angular.module("language",[])
    .controller("LanguageCtrl", function ($scope, $http) {
        $scope.language = {};
        $scope.sendForm = function(language){
            $http({
                method: "POST",
                url: "/api/language",
                data: $.param(language),
                headers: { "Content-Type" : "application/x-www-form-urlencoded" }
            }).then(
                function(data) {
                    window.alert("Успішно обрана мова");
                },
                function(error) {
                    window.alert("Помилка");
                }
            );
        }
    });