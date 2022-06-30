<template>
  <q-card class="item">
    <q-img :src="product.image" class="item__img" fit="contain" />
    <q-card-section class="q-pa-none">
      <q-btn class="q-py-sm q-mx-xs card-content full-width" flat stretch>
        <div class="text-subtitle2 description full-width text-left q-mb-none" :title="product.title">
          {{ product.title }}
        </div>
        <div class="row flex-start flex-center items-stretch q-mb-sm full-width">
          <div class="row self-center">
            <q-icon name="star" :color="product.rating.rate > 0 ? 'orange': 'grey-5'" size="16px"/>
            <q-icon name="star" :color="product.rating.rate > 1 ? 'orange': 'grey-5'" size="16px" />
            <q-icon name="star" :color="product.rating.rate > 2 ? 'orange': 'grey-5'" size="16px" />
            <q-icon name="star" :color="product.rating.rate > 3 ? 'orange': 'grey-5'" size="16px" />
            <q-icon name="star" :color="product.rating.rate > 4 ? 'orange': 'grey-5'" size="16px" />
          </div>
          <small class="text-blue-9 q-ml-xs col-grow text-left self-center">({{ product.rating.count }})</small>
          <span class="q-ml-xs q-mr-xs text-red text-body2 self-center">${{ product.price }}</span>
          <q-icon name="more_vert" class="gt-xs self-center" size="xs" />
        </div>
        <q-menu max-width="235px" max-height="50vh">
          <div class="q-pa-md">
            <div class="row">
              <q-chip color="primary" text-color="white" size="13px" square class="q-mx-none self-start">
                {{ product.category }}
              </q-chip>
               <q-btn round icon="add_shopping_cart" size="12px" class="self-center q-ml-auto" color="indigo-2" text-color="black" @click="addToCart(product.id)" />
            </div>
            <div>{{ product.description }}</div>
          </div>
        </q-menu>
      </q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
// import { Notify } from 'quasar'

export default defineComponent({
  name: 'ProductComponent',
  props: ['product'],
  setup () {
    const $store = useStore()
    onBeforeMount(() => {
      $store.dispatch('products/refreshProducts')
    })
    const addToCart = (id) => {
      console.log($store.commit('products/addToCart', id))
    }
    return { addToCart }
  }
})
</script>

<style scoped>
.item {
  height: fit-content;
  width: 235px;
}
@media screen and (max-width: 600px) {
  .item {
    width: 210px;
  }
}
.description {
  width: 158px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  /* word-break: break-all; */
}
.card-content {
  height: 85px;
}
.item__img {
  height: 120px;
}
.left {
  margin-left: auto;
}
</style>
