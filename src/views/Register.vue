<template>
  <article>
    <h1>Register</h1>
    <p>Once you submit your registration, you will receive a confirmation email shortly thereafter.
      Confirm your address before logging in.</p>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
  </article>
</template>

<script setup>
  import { ref } from 'vue'
  import firebase from '@/services/firebase'
  import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const email = ref('')
  const password = ref('')
  const auth = getAuth()
  const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        alert('Successfully registered! Check your email to verify.');
        sendEmailVerification(auth.currentUser)
        router.push('/login')
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
