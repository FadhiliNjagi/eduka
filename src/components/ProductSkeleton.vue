<template>
  <q-card class="skeleton__card">
    <q-skeleton class="skeleton__img" square />

    <q-card-section>
      <q-item-section>
        <q-item-label>
          <q-skeleton type="text" class="text-subtitle2" />
        </q-item-label>
        <q-item-label caption class="rating-price">
          <q-skeleton type="text" class="q-mr-sm" />
          <q-skeleton type="text" />
        </q-item-label>
      </q-item-section>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ProductSkeleton',
  setup () {
    return {}
  }
}
</script>

<style scoped>
.skeleton__card {
  height: fit-content;
  width: 235px;
}
.skeleton__img {
  height: 120px;
}
.rating-price {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 50px;
}
</style>
