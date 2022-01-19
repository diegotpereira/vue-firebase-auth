<template>
  <div class="vue-tempalte">
    <h3>Bem Vindo</h3>
    <p>{{usuario.displayNome}}</p>
    <p>{{usuario.email}}</p>

    <button type="submit" class="btn btn-dark btn-lg btn-block"
         @click="sair()">
         Sair
    </button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
        usuario: null
    };
  },
  created() {
      firebase.auth().onAuthStateChanged((usuario) => {
          if (usuario) {
              this.usuario = usuario;
          } else {
              this.usuario = null
          }
      })
  },
  methods: {
      sair() {
          firebase.auth().signOut()
          .then(() => {
              firebase.auth().onAuthStateChanged(() => {
                  this.$router.push('/entrar')
              })
          })
      }
  }
};
</script>