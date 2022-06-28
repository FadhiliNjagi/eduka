import { Notify } from 'quasar'

export function updateProducts (state) {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => { state.products = data })
    .catch()
}

export function addToCart (state, productId) {
  if (typeof (state.products[productId]) === 'undefined') {
    Notify.create({
      message: 'Product not found',
      type: 'negative'
    })
  } else if (state.cart.filter(item => item === productId).length) {
    Notify.create({
      message: 'Product already in cart',
      type: 'warning'
    })
  } else {
    state.cart.push(productId)
    Notify.create({
      message: 'Product added to cart',
      type: 'positive'
    })
  }
}
