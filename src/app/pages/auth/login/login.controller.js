'use strict';

function LoginController(Auth, $state, $scope) {
  'ngInject';

  if (Auth.currentUser !== null){
    $state.go('events', {}, {reload: true});
  }

  $scope.schema = {
    "type": "object",
    "properties": {
      "email": {
        "title": "Email",
        "type": "string",
        "format": "email",
        "pattern": "^\\S+@\\S+$",
        //"description": "Where we can reach you.",
        "validationMessage": "That's not a valid e-mail"
      },
      "password": {
        "title": "Password",
        "type": "string",
        "x-schema-form": {
          "type": "password"
        },
        "minLength": 6,
        //"pattern": "^[A-za-z0-9]{6,}$",
        //"description": "Please write a strong password.",
        "validationMessage": "Your password must have at least 6 characters."
      }
    },
    "required": [
      "email",
      "password"
    ]
  };

  $scope.form = [
    {
      "key": "email",
      "fieldAddonLeft": "<i class='fa fa-envelope' aria-hidden='true'></i>",
    },
    {
      "key": "password",
      "fieldAddonLeft": "<i class='fa fa-lock' aria-hidden='true'></i>",
    },
    {
      "type": "submit",
      fieldHtmlClass: "btn btn-bg btn-block btn-primary",
      title: "Log in"
    }
  ];

  $scope.model = {};

  $scope.onSubmit = function(form) {
    // First we broadcast an event so all fields validate themselves
    $scope.$broadcast('schemaFormValidate');
    // Then we check if the form is valid
    if (form.$valid) {
      $scope.loginWithPassword();
    }
  };

  $scope.loginWithPassword = function() {
    Auth.signInWithPassword($scope.model.email, $scope.model.password);
  };

  $scope.socialLogin = function(provider) {
    Auth.signInWithProvider(provider);
  };

}

export default LoginController;

