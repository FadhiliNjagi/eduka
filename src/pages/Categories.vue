<template>
  <q-page padding>
    <div class="q-mb-lg row q-gutter-md flex-center">
      <q-card class="category cursor-pointer" v-for="(category, index) in categories" :key="index"
      :class="[index === selectedCategory ? 'selected':'']" @click="selectedCategory = index">
        <q-img :src="category.image" fit="contain" class="category__img" />
        <q-card-section>
          <div class="text-body2 text-capitalize">{{ category.category }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="text-h6 text-capitalize q-mb-sm">{{ categories[selectedCategory].category }}</div>
    <div class="row q-gutter-sm">
      <Product v-for="(item, index) in products" :key="index" :product="item" />
    </div>
  </q-page>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import Product from 'components/Product.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CategoriesPage',
  components: { Product },
  setup () {
    const $store = useStore()
    const categories = computed({
      get: () => $store.state.products.categories
    })
    console.log($store.state.products.products_loading)
    const selectedCategory = ref(0)
    const products = computed({
      get: () => $store.state.products.products.filter(
        (value) => value.category === categories.value[selectedCategory.value].category)
    })

    return { categories, selectedCategory, products }
  }
})
</script>

<style scoped>
.category {
  height: fit-content;
  width: 200px;
}
.category__img {
  height: 120px;
}
.selected {
  outline: #1266F1 solid 3px;
}
</style>
