<template>
  <AppTopnav />
  <AppHeader />
  <main class="main">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'
export default {
  name: 'xtx-layout',
  components: { AppTopnav, AppHeader, AppFooter },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>
<style scoped lang="less"></style>
