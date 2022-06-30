<template>
  <q-page class="q-pa-md">
    <div class="q-my-md text-h5">Products</div>
    <div class="row q-gutter-md flex-center" v-show="!loading && products.length">
      <Product v-for="(product, index) in products" :key="index" :product="product" />
    </div>
    <div class="row q-gutter-md flex-center" v-show="loading">
      <ProductSkeleton v-for="item in 10" :key="item" />
    </div>
  </q-page>
  <!-- <q-page class="error-page">
    <q-img src="~assets/sad_face_icon.png" class="sad-face" fit="contain" />
    <h4>Error fetching data</h4>
  </q-page> -->
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import Product from 'components/Product'
import ProductSkeleton from 'src/components/ProductSkeleton.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { Product, ProductSkeleton },
  setup () {
    const $store = useStore()

    const products = computed({
      get: () => $store.state.products.products
    })
    console.log($store.state.products.products_loading)

    const loading = computed({
      get: () => $store.state.products.products_loading
    })
    console.log($store.state.products.products_loading)

    console.log('Mounted')

    return { products, loading }
  }
})
</script>
