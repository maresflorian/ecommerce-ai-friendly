<template>
  <div id="app">
    <h1>Bine ai venit în magazinul nostru!</h1>

    <div class="cart-info">
      🛒 Coș: {{ cart.length }} produse – Total: {{ totalCart }} RON
    </div>

    <button @click="toggleCart" class="toggle-button">
      {{ showCart ? 'Ascunde coșul' : 'Arată coșul' }}
    </button>

    <ShoppingCart
      v-if="showCart"
      :cart="cart"
      @remove-from-cart="removeFromCart"
    />

    <router-view @add-to-cart="addToCart" />

  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import ShoppingCart from './components/ShoppingCart.vue'
import products from './products'

// ✅ Generăm Schema.org JSON-LD pentru TOATE produsele
const schemaAllProducts = products.map((product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "image": window.location.origin + product.image,
  "description": product.description,
  "brand": {
    "@type": "Brand",
    "name": "LuxCraft"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "RON",
    "price": product.price.toFixed(2),
    "availability": "https://schema.org/InStock"
  }
}))

// ✅ Injectăm toate produsele într-un singur bloc JSON-LD
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(schemaAllProducts, null, 2)
    }
  ]
})
useHead({
  title: 'Magazin AI Friendly - Prime Select',
  meta: [
    { name: 'description', content: 'Descoperă cele mai noi produse LuxCraft: portofele, ceasuri și genți minimaliste.' },
    { property: 'og:title', content: 'Magazin AI Friendly - LuxCraft' },
    { property: 'og:description', content: 'Cumpără acum produse RFID, ceasuri sport și genți minimaliste. Rapid, ușor și AI optimizat!' },
    { property: 'og:image', content: window.location.origin + '/assets/portofel.jpg' },
    { property: 'og:url', content: window.location.href },
    { property: 'og:type', content: 'website' }
  ]
})

</script>

<script>
export default {
  name: 'App',
  data() {
    return {
      cart: [],
      showCart: false
    }
  },
  methods: {
    addToCart(product) {
      this.cart.push(product)
    },
    removeFromCart(index) {
      this.cart.splice(index, 1)
    },
    toggleCart() {
      this.showCart = !this.showCart
    }
  },
  computed: {
    totalCart() {
      return this.cart.reduce((sum, prod) => sum + prod.price, 0).toFixed(2)
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 30px;
}

.cart-info {
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 1.1em;
}

.toggle-button {
  margin: 15px;
  padding: 10px 16px;
  background-color: #35495e;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}

.toggle-button:hover {
  background-color: #2c3e50;
}
</style>
