const fs = require('fs')
const path = require('path')
const products = require('./src/sitemap-products') // 👈 schimbat

const domain = 'https://exemplu.ro' // 🔁 înlocuiește cu domeniul real

const urls = [
  `${domain}/`
]

products.forEach(product => {
  urls.push(`${domain}/product/${product.id}`)
})

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url}</loc><priority>0.9</priority></url>`).join('\n')}
</urlset>`

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap)

console.log('✅ sitemap.xml generat automat în /public')
