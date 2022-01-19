<template>
  <div class="vue-tempalte">
    <form @submit.prevent="registrarUsuario">
      <h3>Cadastrar</h3>

      <div class="form-group">
        <label for="">Nome</label>
        <input type="text" class="form-control form-control-lg" v-model="usuario.nome">
      </div>

      <div class="form-group">
        <label for="">Email</label>
        <input type="email" class="form-control form-control-lg" v-model="usuario.email">
      </div>

      <div class="form-group">
        <label for="">Senha</label>
        <input type="password" class="form-control form-control-lg" v-model="usuario.password">
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Cadastrar
      </button>

      <p class="forgot-password text-right">
        Já registrado
        <router-link :to="{name: 'login' }">Entrar?</router-link>
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
        nome: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    registrarUsuario() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.usuario.email, this.usuario.password)
      .then((res) => {
        res.usuario
        .updateProfile({
          displayNome: this.usuario.nome 
        })
        .then(() => {
          this.$router.push('/entrar')
        })
      })
      .catch((error) => {
        alert(error.message)
      })
    }
  }
};
</script>