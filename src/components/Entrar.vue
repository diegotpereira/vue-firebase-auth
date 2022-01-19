<template>
  <div class="vue-tempalte">
    <form @submit.prevent="usuarioLogin">
        <h3>Usuário Entrar</h3>

        <div class="form-group">
            <label>Endereço de Email</label>
            <input type="email" class="form-control form-control-lg" v-model="usuario.email">
        </div>

        <div class="form-group">
            <label>Senha</label>
            <input type="password" class="form-control form-control-lg" v-model="usuario.password">
        </div>

        <button type="submit" class="btn btn-dark btn-lg btn-block">Entrar</button>

        <p class="forgot-password text-right mt-2 mb-4">
            <router-link to="/esqueceu-senha">Esqueceu a Senha?</router-link>
        </p>
    </form>

  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
        usuario: {
            email: '',
            password: ''
        }
    };
  },
  methods: {
      usuarioLogin() {
          firebase
          .auth()
          .signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
          .then(() => {
              this.$router.push('/home')
          })
          .catch((error) => {
              alert(error.message)
          })
      }
  }
};
</script>