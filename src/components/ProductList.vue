<template>
  <div class="product-list">
    <h2>Produsele noastre</h2>
    <div class="card-container">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" />
        <h3>
          <router-link :to="`/product/${product.id}`">
            {{ product.name }}
          </router-link>
        </h3>
        <p>{{ product.description }}</p>
        <strong>{{ product.price }} RON</strong>
        <br />
        <button @click="$emit('add-to-cart', product)">Adaugă în coș</button>
      </div>
    </div>
  </div>
</template>


<script>
import products from '../products'

export default {
  name: 'ProductList',
  data() {
    return {
      products
    }
  }
}
</script>

<style>
.product-list {
  max-width: 1000px;
  margin: 30px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.product-list h2 {
  text-align: center;
  margin-bottom: 20px;
}

.card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  width: 280px;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.2s ease;
  background-color: #fff;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.product-card button {
  margin-top: 10px;
  padding: 8px 14px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.product-card .details-button {
  background-color: #35495e;
  margin-left: 8px;
}

.product-card button:hover {
  opacity: 0.9;
}
</style>
