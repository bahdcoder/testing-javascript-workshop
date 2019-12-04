<template>
    <div class="App">
        <form class="form" @submit.prevent='handleSubmit'>
            <h1 class="">Login</h1>
            <label class="inputLabel" htmlFor="email">
                Email
            </label>
            <input
                id="email"
                type="email"
                name="email"
                class="inputField"
                placeholder="enter your email"
            />
            <span class='error' v-if="errors.email">
                {{ errors.email }}
            </span>

            <label class="inputLabel" htmlFor="password">
                Password
            </label>
            <input
                id="password"
                type="password"
                name="password"
                class="inputField"
                placeholder="enter your password"
            />

            <span class='error' v-if="errors.password">
                {{ errors.password }}
            </span>

            <button class="loginButton">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            errors: {}
        }
    },
    methods: {
        handleSubmit() {
            this.errors = {
                email: 'Your email is invalid.',
                password: 'Your password is invalid.'
            }
        }
    }
}
</script>

<style>
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.App {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 40px;
    margin-top: 80px;
}

.form {
    width: 30%;
}

.inputField {
    border: none;
    width: 100%;
    font-size: 1rem;
    background: #f2f2f2;
    padding: 1rem 1.5rem;
    border-radius: 4px;
}

.inputLabel {
    margin: 15px 0;
    display: inline-block;
}

.inputField:focus {
    outline: none;
}

.loginButton {
    margin-top: 20px;
    background: #6abfc3;
    border-radius: 4px;
    border: none;
    padding: 15px 30px;
    color: #fff;
    font-size: 1rem;
    font-weight: bolder;
    cursor: pointer;
}

.error {
    display: inline-block;
    color: red;
    width: 100%;
    margin-top: 10px;
}

</style>
