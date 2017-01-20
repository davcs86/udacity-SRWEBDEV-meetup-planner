'use strict';

function MeController(Auth, $state, $scope, $log) {
  'ngInject';

  if (Auth.currentUser === null) {
    $state.go('events', {}, {reload: true});
  }

  $scope.schema = {
    "type": "object",
    "required": [
      "name",
      "shoesizeLeft"
    ],
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
      "genre": {
        "title": "Genre",
        "type": "string",
        "enum": [
          "Male",
          "Female",
          "Prefer to no respond"
        ]
      },
      "shoesizeLeft": {
        "title": "Shoe size (left)",
        "default": 42,
        "type": "number"
      },
      "shoesizeRight": {
        "title": "Shoe size (right)",
        "default": 42,
        "type": "number"
      },
      "attributes": {
        "type": "object",
        "title": "Attributes",
        "required": [
          "eyecolor"
        ],
        "properties": {
          "eyecolor": {
            "type": "string",
            "format": "color",
            "title": "Eye color",
            "default": "pink"
          },
          "haircolor": {
            "type": "string",
            "title": "Hair color"
          },
          "shoulders": {
            "type": "object",
            "title": "Shoulders",
            "properties": {
              "left": {
                "type": "string",
                "title": "Left"
              },
              "right": {
                "type": "string",
                "title": "Right"
              }
            }
          }
        }
      },
      "things": {
        "type": "array",
        "title": "I like...",
        "items": {
          "type": "string",
          "enum": [
            "clowns",
            "compiling",
            "sleeping"
          ]
        }
      },
      "dislike": {
        "type": "array",
        "title": "I dislike...",
        "items": {
          "type": "string",
          "title": "I hate"
        }
      },
      "changepwd": {
        "title": "Change your password",
        "description": "I agree to change my password.",
        "type": "boolean",
        "default": false
      },
      "newpassword": {
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
      "confirm-newpassword": {
        "title": "Confirm password",
        "type": "string",
        "x-schema-form": {
          "type": "password"
        },
        "description": "Please write again your password to confirm it."
      }
    }
  };

  $scope.form = [
    {
      "type": "fieldset",
      "items": [
        {
          "type": "tabs",
          "tabs": [
            {
              "title": "Account",
              "items": [
                {
                  "key": "name",
                  "fieldAddonLeft": "<i class='fa fa-user' aria-hidden='true'></i>",
                },
                {
                  "key": "email",
                  "fieldAddonLeft": "<i class='fa fa-envelope' aria-hidden='true'></i>",
                }
              ]
            },
            {
              "title": "Contact settings",
              "items": [
                "attributes.haircolor",
                {
                  "key": "attributes.shoulders.left",
                  "title": "Left shoulder",
                  "description": "This value is copied to attributes.shoulders.right in the model"
                },
                {
                  "key": "shoesizeLeft",
                  "feedback": false,
                  "copyValueTo": [
                    "shoesizeRight"
                  ]
                },
                {
                  "key": "shoesizeRight"
                }
              ]
            }
          ]
        }
      ]
    },
    "changepwd",
    {
      "type": "conditional",
      "condition": "model.changepwd",
      "items": [
        {
          "key": "newpassword",
          "fieldAddonLeft": "<i class='fa fa-lock' aria-hidden='true'></i>",
          onChange: $scope.pwdsMatch
        },
        {
          "key": "confirm-newpassword",
          "fieldAddonLeft": "<i class='fa fa-lock' aria-hidden='true'></i>",
          validationMessage: {
            'noMatch': "Passwords don't match"
          },
          onChange: $scope.pwdsMatch
        }
      ]
    },
    {
      "type": "submit",
      fieldHtmlClass: "btn btn-bg btn-block btn-primary",
      title: "Save changes"
    }
  ];

  $scope.model = {};

  $scope.pwdsMatch = function () {

    if (!$scope.model.changepwd) return;

    // Trigger error if passwords don't match.
    if ($scope.model.newpassword !== $scope.model["confirm-newpassword"]) {
      $scope.$broadcast('schemaForm.error.confirm-newpassword', 'noMatch', false);
    } else {
      $scope.$broadcast('schemaForm.error.confirm-newpassword', 'noMatch', true);
    }
  };

  $scope.onSubmit = function (form) {
    $scope.pwdsMatch();
    // First we broadcast an event so all fields validate themselves
    $scope.$broadcast('schemaFormValidate');
    // Then we check if the form is valid
    if (form.$valid) {
      //$scope.createUserWithPassword();
    }
  };

}

export default MeController;
