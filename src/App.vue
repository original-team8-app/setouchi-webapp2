<template>
  <nav>
    <h1 class="title">{{ title }}</h1>
    <div class="container">
      <router-link :to="link.path" v-for="link in links" :key="link.index">
        {{ link.text }}
      </router-link>
      <div>
        <button v-if="isLoggin" v-on:click="logOut">ログアウト</button>
        <button v-else v-on:click="logIn">まずはログイン</button>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export default {
  data() {
    return {
      title: "タイトル",
      loginText: "Googleでログイン",
      isLoggin: false,
      links: [
        {
          path: "/top",
          text: "Top",
        },
        {
          path: "/",
          text: "Home",
        },
        {
          path: "/about",
          text: "About",
        },
        {
          path: "/css-park",
          text: "CSS Park",
        },
      ],
    }
  },
  methods: {
    logIn() {
      const provider = new GoogleAuthProvider()
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly")
      const auth = getAuth()
      auth.languageCode = "it"
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          console.log(token)
          result.user
          if (result.user) {
            this.isLoggin = true
          }
          this.$router.push("/loglog")
        })
        .catch((error) => {
          error.code
          error.message
          error.email
          GoogleAuthProvider.credentialFromError(error)
          // ...
        })
    },
    logOut() {
      this.isLoggin = false
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303030;
}

body {
  margin: 0;
}
nav {
  padding: 25px;
  background: #415a77;
  display: flex;
  justify-content: space-between;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 25px;
  font-size: 1.2rem;
}

nav a.router-link-exact-active {
  color: #303030;
  font-size: 1.3rem;
}
.title {
  margin: 0;
}
.container {
  display: flex;
  align-items: center;
}
.login-button {
  margin: 0 15px;
  padding: 8px;
  font-size: 1rem;
  border-radius: 5px;
}
</style>
