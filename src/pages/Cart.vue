<template>
  <q-page padding>
    <h5 class="q-mb-md">Cart</h5>
    <div class="flex q-gutter-md flex-center">
      <Product v-for="(product, index) in products" :key="index" :product="product" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onBeforeMount, computed } from 'vue'
import Product from '../components/Product.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CartPage',
  components: { Product },
  setup () {
    const $store = useStore()
    onBeforeMount(() => {
      $store.dispatch('products/refreshProducts')
    })
    const cart = computed({
      get: () => $store.state.products.cart
    })
    const products = computed({
      get: () => $store.state.products.products.filter(
        (value) => cart.value.includes(value.id))
    })
    return {
      products
    }
  }
})
</script>
