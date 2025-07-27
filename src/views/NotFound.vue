<template>
  <div class="not-found">
    <h1>404 – Pagina nu a fost găsită</h1>
    <p>Se pare că ai nimerit într-un colț gol al magazinului nostru 🧭</p>
    <router-link to="/" class="btn">Revin-o la pagina principală</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style>
.not-found {
  text-align: center;
  margin-top: 60px;
  font-family: Arial, sans-serif;
}

.not-found h1 {
  font-size: 2em;
  margin-bottom: 15px;
}

.not-found p {
  font-size: 1.1em;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 16px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 8px;
}

.btn:hover {
  background-color: #369a6e;
}
</style>
