<template>
  <nav>
    <h1 class="title">{{ title }}</h1>
    <div class="container">
      <router-link
        :to="link.path"
        v-for="link in links"
        :key="link.index"
        :class="{ disabled: !isLoggin }"
      >
        {{ link.text }}
      </router-link>
      <div>
        <button class="login-button" v-if="isLoggin" v-on:click="logOut">
          {{ logoutText }}
        </button>
        <button class="login-button" v-else v-on:click="logIn">
          {{ loginText }}
        </button>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import swal from "sweetalert"

export default {
  data() {
    return {
      title: "タイトル",
      loginText: "まずはログイン",
      logoutText: "ログアウト",
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
          swal("ログインに成功しました！")
          this.$router.push({
            name: "login-logout",
            params: { deliveryLoginData: this.isLoggin },
          })
        })
        .catch((error) => {
          error.code
          error.message
          error.email
          GoogleAuthProvider.credentialFromError(error)
        })
    },
    logOut() {
      this.isLoggin = false
      swal("ログアウトしました！")
      this.$router.push({
        name: "login-logout",
        params: { deliveryLoginData: this.isLoggin },
      })
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
.disabled:not(:first-of-type) {
  text-decoration: line-through;
  pointer-events: none;
}
.login-button {
  margin: 0 15px;
  width: 150px;
  height: 40px;
  font-size: 1rem;
  border-radius: 5px;
}
</style>
