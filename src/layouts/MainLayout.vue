<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="shadow-1">

        <q-toolbar-title class="q-ml-md" shrink="">
          E-Duka
        </q-toolbar-title>

        <q-space/>
         <q-input dark dense standout v-model="search" class="q-ml-md search-bar" bg-color="blue-1" color="black" clearable label="Search" label-color="black">
          <template v-slot:prepend>
            <q-icon name="search" color="black" />
          </template>
        </q-input>
        <q-space/>

        <q-tabs>
          <q-route-tab label="Home" icon="home" to="/" />
          <q-route-tab label="Categories" icon="list" to="/categories" />
          <q-route-tab label="Cart" icon="shopping_cart" to="/cart" />
        </q-tabs>

        <!-- <q-separator dark vertical />
        <q-btn stretch flat label="Home" icon="home" class="nav-bar__icon" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Categories" icon="list" class="nav-bar__icon" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Cart" icon="shopping_cart" class="nav-bar__icon" /> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup () {
    const leftDrawerOpen = ref(false)
    const search = ref('')

    return {
      search,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
.search-bar {
  max-width: 50vw;
  width: 100%;
  /* margin-left: 40px; */
  margin-right: 10px;
}
.nav-bar__icon {
  width: fit-content;
}
</style>
