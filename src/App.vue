<script setup>
import { RouterLink, RouterView } from 'vue-router'
import firebase from '@/services/firebase'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth()
const logout = () => {
  signOut(auth).then(() => {
    console.log('logged out')
    this.$router.push('/')
  })
}
</script>

<template>
  <figure>
    <img alt="Vue logo" class="logo" src="@/assets/adherely.svg" width="125" height="125" />
  </figure>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/secret">Secret</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <a @click="logout">Logout</a>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

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

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 5);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 1rem 0 0 0;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
