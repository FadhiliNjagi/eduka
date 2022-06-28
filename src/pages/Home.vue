<template>
  <q-page class="q-pa-md" v-if="products">
    <h5 class="q-mb-md">Products</h5>
    <div class="flex q-gutter-md flex-center">
      <Product v-for="(product, index) in products" :key="index" :product="product" />
    </div>
  </q-page>
  <q-page v-else>
    <q-icon name="expand_more" />
    <div>Error getting data</div>
  </q-page>
</template>

<script>
import { computed, defineComponent, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import Product from 'components/Product'

export default defineComponent({
  name: 'IndexPage',
  components: { Product },
  setup () {
    const $store = useStore()
    onBeforeMount(() => {
      $store.dispatch('products/refreshProducts')
    })

    const products = computed({
      get: () => $store.state.products.products
    })

    return { products }
  }
})
</script>
