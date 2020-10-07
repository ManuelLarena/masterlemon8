<template>
  <login-page
    v-bind="{
      login,
      updateLogin,
      loginRequest,
      loginError,
      snackbar,
      snackbarText,
      snackbarColor,
      onClose,
      isVisible,
    }"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { loginRequest } from '../../rest-api/api/login';
import { baseRoutes } from '../../router';
import LoginPage from './Page.vue';
import { createEmptyLogin, Login, createEmptyLoginError } from './viewModel';
import { mapLoginVMToModel } from './mapper';
import { validation } from './validations';

export default Vue.extend({
  name: 'PageLoginContainer',
  components: { LoginPage },
  data() {
    return {
      login: createEmptyLogin(),
      loginError: createEmptyLoginError(),
      snackbar: false,
      snackbarText: '',
      snackbarColor: '',
      isVisible: true,
    };
  },
  methods: {
    updateLogin(field: string, value: string) {
      this.login = {
        ...this.login,
        [field]: value,
      };

      validation.validateField(field, value).then((result) => {
        this.loginError = {
          ...this.loginError,
          [field]: result,
        };
      });
    },
    loginRequest(): void {
      validation.validateForm(this.login).then((result) => {
        if (result.succeeded) {
          const loginModel = mapLoginVMToModel(this.login);
          loginRequest(loginModel)
            .then(() => {
              this.$router.push(baseRoutes.recipe);
              localStorage.setItem('username', loginModel.name);
              localStorage.setItem(
                'token',
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3OCIsIm5hbWUiOiJtYXN0ZXI4QGxlbW9uY29kZS5uZXQiLCJpYXQiOjE1MTYyMzkwMjJ9.5yh0NKIFuNv9XBNQGpDbBaM0rBVBPOs2n9KlHzdfME0'
              );
            })
            .catch((error) => {
              this.snackbar = true;
              this.snackbarColor = 'error';
              this.snackbarText = error;
            });
        } else {
          // this.snackbar = true;
          // this.snackbarColor = 'warning';
          // this.snackbarText = 'Please fill in this mandatory field';
          this.loginError = {
            ...this.loginError,
            ...result.fieldErrors,
          };
        }
      });
    },
    onClose(): void {
      this.snackbar = false;
    },
  },
});
</script>
