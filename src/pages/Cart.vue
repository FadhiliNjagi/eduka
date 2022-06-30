<template>
  <q-page padding>
    <div class="q-my-md text-h5">Cart</div>
    <div class="row q-gutter-md flex-start" v-show="products.length">
      <Product v-for="(product, index) in products" :key="index" :product="product" />
    </div>
    <div class="empty" v-show="!products.length">
      <q-icon name="add_shopping_cart" size="100px" />
      <div class="text-h4 q-mb-sm">Cart is empty</div>
      <div class="text-subtitle1">Add items to view them here</div>
    </div>
  </q-page>
  <!-- <q-page class="error-page">
    <q-img src="~assets/sad_face_icon.png" class="sad-face" fit="contain" />
    <h4>Error fetching data</h4>
  </q-page> -->
</template>

<script>
import { defineComponent, computed } from 'vue'
import Product from '../components/Product.vue'
import { useStore, mapGetters } from 'vuex'

export default defineComponent({
  name: 'CartPage',
  components: { Product },
  setup () {
    const $store = useStore()
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
  },
  computed: {
    ...mapGetters('products', ['getData', 'getFileName', 'getColumnNames'])
  }
})
</script>

<style scoped>
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 400px);
}
</style>
