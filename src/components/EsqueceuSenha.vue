<template>
  <div class="vue-tempalte">
    <form @submit.prevent="esqueceuSenha">
        <h3>Esqueceu Senha</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control form-control-lg" v-model="usuario.email">
        </div>

        <button type="submit" class="btn btn-dark btn-lg btn-block">Redefinir senha</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
        usuario: {
            email: ''
        }
    };
  },
  methods: {
      esqueceuSenha() {
          firebase
          .auth()
          .sendPasswordResetEmail(this.usuario.email)
          .then(() => {
              alert('Verifique seu e-mail cadastrado para redefinir a senha!')
              this.usuario = {
                  email: ''
              }
          })
          .catch((error) => {
              alert(error)
          })
      }
  }
};
</script>