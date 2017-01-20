'use strict';

function RegisterController(Auth, $state, $scope, $log) {
  'ngInject';

  if (Auth.currentUser !== null) {
    $state.go('events', {}, {reload: true});
  }

  $scope.schema = {
    "type": "object",
    "properties": {
      "name": {
        "title": "Name",
        "type": "string",
        "minLength": 6,
        "pattern": "^[A-za-z0-9][A-za-z0-9\\s]{5,}$",
        "description": "Your name or favorite nickname.",
        "validationMessage": "Your name must have at least 6 characters."
      },
      "email": {
        "title": "Email",
        "type": "string",
        "format": "email",
        "pattern": "^\\S+@\\S+$",
        "description": "Where we can reach you.",
        "validationMessage": "That's not a valid e-mail."
      },
      "password": {
        "title": "Password",
        "type": "string",
        "x-schema-form": {
          "type": "password"
        },
        "minLength": 6,
        "pattern": "^[A-za-z0-9]{6,}$",
        "description": "Please write a strong password.",
        "validationMessage": "Your password must have at least 6 letters and/or numbers, and contain at least one upper case letter and one number."
      },
      "confirm-password": {
        "title": "Confirm password",
        "type": "string",
        "x-schema-form": {
          "type": "password"
        },
        "description": "Please write again your password to confirm it."
      }
    },
    "required": [
      "name",
      "email",
      "password",
      "confirm-password"
    ]
  };

  $scope.form = [
    {
      "key": "name",
      "fieldAddonLeft": "<i class='fa fa-user' aria-hidden='true'></i>",
    },
    {
      "key": "email",
      "fieldAddonLeft": "<i class='fa fa-envelope' aria-hidden='true'></i>",
    },
    {
      "key": "password",
      "fieldAddonLeft": "<i class='fa fa-lock' aria-hidden='true'></i>",
      onChange: $scope.pwdsMatch
    },
    {
      "key": "confirm-password",
      "fieldAddonLeft": "<i class='fa fa-lock' aria-hidden='true'></i>",
      validationMessage: {
        'noMatch': "Passwords don't match"
      },
      onChange: $scope.pwdsMatch
    },
    {
      "type": "submit",
      fieldHtmlClass: "btn btn-bg btn-block btn-primary",
      title: "Sign up"
    }
  ];

  $scope.model = {};

  $scope.pwdsMatch = function () {
    // Trigger error if passwords don't match.
    if ($scope.model.password !== $scope.model["confirm-password"]) {
      $scope.$broadcast('schemaForm.error.confirm-password', 'noMatch', false);
    } else {
      $scope.$broadcast('schemaForm.error.confirm-password', 'noMatch', true);
    }
  };

  $scope.onSubmit = function (form) {
    $scope.pwdsMatch();
    // First we broadcast an event so all fields validate themselves
    $scope.$broadcast('schemaFormValidate');
    // Then we check if the form is valid
    if (form.$valid) {
      $scope.createUserWithPassword();
    }
  };

  $scope.createUserWithPassword = function () {
    Auth.createUserWithPassword($scope.model.name, $scope.model.email, $scope.model.password);
  };

  $scope.socialRegister = function (provider) {
    // Register with social media
    Auth.signInWithProvider(provider);
  };
}

export default RegisterController;
