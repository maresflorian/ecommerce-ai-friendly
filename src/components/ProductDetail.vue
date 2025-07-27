<template>
  <div class="product-detail">
    <h2>{{ product.name }}</h2>
    <img :src="product.image" :alt="product.name" />
    <p>{{ product.description }}</p>
    <strong>{{ product.price }} RON</strong>

    <br /><br />
    <button @click="$router.push('/')">← Înapoi la produse</button>
    <button @click="$emit('add-to-cart', product)">Adaugă în coș</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import products from '../products'

// 🔍 Obținem ID-ul produsului din URL
const route = useRoute()
const id = parseInt(route.params.id)

// 🔍 Căutăm produsul cu acel ID
const product = products.find((p) => p.id === id)

// 🧠 Adăugăm meta taguri + Schema.org pentru produsul acesta
useHead({
  title: `Detalii - ${product.name}`,
  meta: [
    { name: 'description', content: product.description },
    { property: 'og:title', content: product.name },
    { property: 'og:description', content: product.description },
    { property: 'og:image', content: window.location.origin + product.image },
    { property: 'og:url', content: window.location.href },
    { property: 'og:type', content: 'product' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": window.location.origin + product.image,
        "description": product.description,
        "brand": { "@type": "Brand", "name": "LuxCraft" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "RON",
          "price": product.price.toFixed(2),
          "availability": "https://schema.org/InStock"
        }
      }, null, 2)
    }
  ]
})
</script>

<style>
.product-detail {
  max-width: 600px;
  margin: 40px auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

.product-detail img {
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.product-detail button {
  margin: 10px;
  padding: 10px 18px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.product-detail button:hover {
  background-color: #369a6e;
}
</style>
