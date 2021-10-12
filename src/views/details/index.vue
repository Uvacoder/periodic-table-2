<template>
  <DetailsTabs />

  <router-view />
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'

// Elements
import { elements } from '../../assets/data/elements.json'

// Components
import DetailsTabs from './Tabs.vue'

const route = useRoute()

const state = reactive({
  element: {}
})

onMounted(() => {
  const elementParam = route.params.element
  const element = elements.find(
    ({ name }) => name.toLowerCase() === elementParam.toLowerCase()
  )

  if (element) {
    state.element = element
  } else {
    alert('Elemento não encontrado')
  }
})
</script>

<style scoped lang="scss"></style>
