<template>
  <div class="cart-box">
    <h2>Coșul tău</h2>
    <p v-if="cart.length === 0">Coșul este gol.</p>
    <ul v-else>
      <li v-for="(product, index) in cart" :key="index">
        <strong>{{ product.name }}</strong> – {{ product.price }} RON
        <button @click="$emit('remove-from-cart', index)">Șterge</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  props: {
    cart: Array
  }
}
</script>

<style>
.cart-box {
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 12px;
  font-family: Arial, sans-serif;
  border: 1px solid #ddd;
}

.cart-box ul {
  list-style: none;
  padding: 0;
}

.cart-box li {
  margin-bottom: 10px;
}

.cart-box button {
  margin-left: 10px;
  padding: 4px 8px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cart-box button:hover {
  background-color: #c0392b;
}
</style>
