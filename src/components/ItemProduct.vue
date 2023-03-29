<template>
	<div class="container" @click="goToProduct(product)">
		<div class="header">
			<h3 class="name">{{ product.name }}</h3>
			<p class="price">{{ product.price + ' $' }}</p>
		</div>
		<div class="img-container">
			<img
				class="image"
				:src="product.thumbnailUrl"
				height="200"
				width="200"
				:alt="product.name"
			/>
		</div>
		<div class="buy-btn">
			<Button @click="checkInCart(product)" :apperance="'unprimary'">{{
				getStatus(props.product).value
			}}</Button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Button from './Button.vue'
import { IProduct } from '@interfaces/Product.interface'
import { getStatus } from '@utils/CartUtils'
import { checkInCart } from '@utils/CartUtils'
import { useRouter } from 'vue-router'
import { useProductsStore } from '@store/ProductsStore'
const productsStore = useProductsStore()
interface IProps {
	product: IProduct
}
const props = defineProps<IProps>()
const router = useRouter()
const goToProduct = (product: IProduct) => {
	productsStore.setCurrentProduct(product)
	router.push({
		name: 'product',
		params: {
			id: product.id
		}
	})
}
</script>

<style lang="scss" scoped>
@import '@scss/colors.scss';

//main
.container {
	cursor: pointer;
	color: $light;
	padding: 10px;
	max-width: 220px;
	border-radius: 10px;
	height: fit-content;
	background-image: $gradient;
	position: relative;
	transition: all 0.2s;
	display: flex;
	flex-direction: column;
}
.container::before {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	border-radius: 10px;
	transform: translate(-50%, -50%);
	transition: all 1s;
}
.header {
	display: flex;
	height: fit-content;
	min-height: 80px;
	justify-content: space-between;
	gap: 5px;
}
.name {
	word-break: break-word;
	color: $black;
	font-size: 1em;
	font-weight: 100;
}
.buy-btn {
	margin-top: 10px;
	display: flex;
	justify-content: center;
	z-index: 21;
}

.price {
	background-color: $black;
	max-width: fit-content;
	width: 100%;
	font-weight: 100;
	height: fit-content;
	margin: auto 0;
	padding: 10px;
	border-radius: 30px;
}

.image {
	transition: transform 1s;
}
.img-container {
	display: flex;
	justify-content: center;
	border-radius: 10px;
	max-height: 200px;
	max-width: 200px;
	height: 100%;
	width: 100%;
	overflow: hidden;
	box-shadow: 2px 2px 4px $black;
}

//animations
.container:hover {
	background-color: $light;

	.image {
		transform: scale(1.2);
	}
	transform: scale(1.06);
}
.container:hover::before {
	content: 'More information';
	font-size: 1em;
	font-weight: 100;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	color: $light;
	border: 1px solid $black;
	border-radius: 10px;
	z-index: 20;
	background-color: #413f4198;
	width: 100%;
	height: 100%;
	min-height: 40px;
}
</style>
