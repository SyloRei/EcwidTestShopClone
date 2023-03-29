<template>
	<BaseLayout>
		<ProductsContainer :products="globalStore.filterProductsByCategory" />
	</BaseLayout>
</template>

<script setup lang="ts">
import ProductsContainer from '@containers/ProductsContainer.vue'
import { useGlobalStore } from '@store/GlobalStore'
import BaseLayout from '@layouts/BaseLayout.vue'
const globalStore = useGlobalStore()
</script>
