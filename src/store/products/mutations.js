import { Notify } from 'quasar'

export function updateProducts (state) {
  state.products_loading = true
  fetch('https://fakestoreapi.com/products')
    .then(response => {
      if (response.ok) {
        response.json().then(data => {
          state.products = data
        })
      } else {
        Notify.create({
          message: 'Error updating products',
          type: 'negative'
        })
        console.log('No')
      }
    })
    .catch(() => {
      Notify.create({
        message: 'Could not connect to the server',
        type: 'negative'
      })
    })
    .finally(() => {
      state.products_loading = false
    })
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
