<template>
	<div :class="$style.container">
		<ItemProduct
			:product="product"
			v-for="product in products"
			:key="product.id"
		></ItemProduct>
	</div>
</template>

<script setup lang="ts">
import { useProductsStore } from '@store/ProductsStore'
import { onMounted } from 'vue'
import ItemProduct from '@components/ItemProduct.vue'
import { IProduct } from '@interfaces/Product.interface'
const productsStore = useProductsStore()
const props = defineProps<{ products: IProduct[] }>()
onMounted(async () => {
	productsStore.getProducts()
})
</script>

<style lang="scss" module>
@import '@scss/colors.scss';
.container {
	overflow: hidden;
	padding: 20px;
	background-color: $black;
	border-radius: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
	position: relative;
}

@media (max-width: 480px) {
}
</style>
