<template>
  <header>
    <figure>
      <img alt="Vue logo" class="logo" src="@/assets/adherely.svg" width="125" height="125" />
    </figure>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/secret">Secret</RouterLink>
      <RouterLink v-if="!authed" to="/login">Login</RouterLink>
      <a v-if="authed" @click="logout">Logout</a>
      <RouterLink to="/register">Register</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script>
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import firebase from '@/services/firebase'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'

export default {
  setup() {
    const authed = ref(null)
    const auth = getAuth()
    const router = useRouter()
    const logout = () => {
      signOut(auth).then(() => {
        alert('You\'ve been logged out')
        router.push('/')
      })
    }

    return {
      authed, auth, logout
    }
  },

  mounted() {
    onAuthStateChanged(this.auth, (user) => {
      this.authed = user ? user.uid : false
    })
  }
}
</script>

<style>
@import '@/assets/base.css';

#app {
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

figure {
  grid-column: 1;
  max-height: 4rem;
}

header {
  grid-column: 2;
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  color: hsla(160, 100%, 37%, 1);
  cursor: pointer;
  text-decoration: none;
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  font-size: 0.8rem;;
  margin-top: 2rem;
  text-align: center;
  width: 100%;
}

nav a.router-link-exact-active {
  color: #147381;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  border-left: 1px solid #147381;
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
