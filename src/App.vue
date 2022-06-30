<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  preFetch ({ store }) {
    console.log('preFetch')
    console.log('refreshing data')
    return store.dispatch('products/refreshProducts')
  }
})
</script>
