<template>
	<div :class="$style['cart-item']">
		<img
			:class="$style.image"
			:src="product.smallThumbnailUrl"
			alt="image"
			height="50"
			width="50"
		/>
		<p :class="$style.name">{{ product.name }}</p>
		<p :class="$style.price">{{ product.price + ' $' }}</p>
		<Button
			@click="cartStore.deleteFromCart(product)"
			:class="$style.button"
			:apperance="'unprimary'"
			>Удалить</Button
		>
	</div>
</template>
<script lang="ts" setup>
import { IProduct } from '@interfaces/Product.interface'
import { useCartStore } from '@store/CartStore'
import Button from './Button.vue'

const cartStore = useCartStore()
const props = defineProps<{ product: IProduct }>()
</script>

<style lang="scss" module>
@import '@scss/colors.scss';
.cart-item {
	border-radius: 10px;
	color: $light;
	align-items: center;
	background-color: $light;
	padding: 10px;
	display: grid;
	grid-template-columns: auto 2fr 0.5fr 0.5fr;
	gap: 10px;
}

.name {
	color: $black;
}
.image {
	border-radius: 10px;
}
.price {
	background-color: $black;
	padding: 10px;
	border-radius: 10px;
	max-width: 100px;
	min-width: 60px;
	width: 100%;
	justify-self: end;
	text-align: center;
}
.button {
	justify-self: end;
}

@media (max-width: 450px) {
	.cart-item {
		font-size: 0.8em;
	}
}
@media (max-width: 350px) {
	.cart-item {
		display: flex;
		flex-direction: column;
	}
}
</style>
