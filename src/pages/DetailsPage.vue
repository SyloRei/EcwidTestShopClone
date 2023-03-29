<template>
	<BaseLayout>
		<ProductDetails v-if="product.id" :product="product" />
		<Loading style="display: flex; justify-content: center" v-else></Loading>
	</BaseLayout>
</template>
<script setup lang="ts">
import { useProductsStore } from '@store/ProductsStore'
import BaseLayout from '@layouts/BaseLayout.vue'
import ProductDetails from '@components/ProductDetails.vue'
import { onMounted, ref } from 'vue'
import Loading from '@components/Loading.vue'
const productsStore = useProductsStore()
const product = ref(productsStore.currentProduct)
onMounted(async () => {
	if (Object.values(product.value).length == 0) {
		await productsStore.getProduct()
		product.value = productsStore.currentProduct
	}
})
</script>
<style lang="scss" module>
@import '@scss/colors.scss';
</style>
