Template.loginFacebook.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Ha fallado");
            }
        });
    },

    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("salida failed");
            }
        })
    }
});

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: false,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: true,
    showForgotPasswordLink: false,
    showLabels: false,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,
    socialLoginStyle: "redirect",

    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/home',
    redirectTimeout: 4000,    

    // Texts
    texts: {
      button: {
          signUp: "Registrarse ",
          signIn: "Entrar",
          changePwd: "Password Text",
          enrollAccount: "Registrese",
          forgotPwd: "Restaurar",
          resetPwd: "Cambiar clave",
      },
      socialIcons: {
            signIn: "Ingresar con Facebook",
       },
      
      title: {
          forgotPwd: "Recuperar contraseña",
          signIn: "Ingresar",
          signUp: "Registrarse ",
          signIn: "Entrar",
          changePwd: "Password Text",
          enrollAccount: "Registrese",
          forgotPwd: "¿Olvido su contraseña?",
          resetPwd: "Cambiar clave",

      },
        sep: "Ó",
        socialSignIn: "Ingresar",
        socialSignUp: "Registrarse",
        socialWith: "con",
        pwdLink_link: "¿Olvido su contraseña?",
        signUpLink_pre: "¿No tiene una cuenta?",
        signUpLink_link: "registrese",
        signInLink_pre: "Si ya tiene una cuenta",
        signInLink_link: "ingrese",
        errors: {
            accountsCreationDisabled: "Si ya tiene una cuentas está deshabilitado",
            cannotRemoveService: "No se puede remover el servicio",
            captchaVerification: "Falló la verificación",
            loginForbidden: "Usuario no encontrado",
            mustBeLoggedIn: "Ya ha ingresado",
            pwdMismatch: "error.pwdsDontMatch",
            validationErrors: "Error en la validación",
            verifyEmailFirst: "Por favor verifique el enlace enviado a su correo electrónico",
        },
    },
});