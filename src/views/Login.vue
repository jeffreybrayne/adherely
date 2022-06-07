<template>
  <article>
    <h1>Login</h1>
    <p>You must login to see the company secrets</p>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="login">Login</button></p>
  </article>
</template>

<script setup>
  import { ref } from 'vue'
  import firebase from '@/services/firebase'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  const email = ref('')
  const password = ref('')
  const auth = getAuth()
  const router = useRouter()
  const login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        alert('Successfully logged in!');
        router.push('/secret')
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  }
</script>

<style scoped>
article {
  margin-top: 3rem;
  min-height: 10rem;
  min-width: 20rem;
}
p {
  margin: 0.25rem;
}
</style>
