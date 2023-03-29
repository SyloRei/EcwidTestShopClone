<template>
	<button :class="$style.button">
		<CartIcon :class="$style.icon" />
		<div :class="$style.quantity" v-if="quantity > 0 && quantity < 10">
			{{ quantity }}
		</div>
		<div :class="$style.quantity" v-else-if="quantity > 9">>9</div>
	</button>
</template>

<script lang="ts" setup>
import CartIcon from '@assets/icons/cart.svg?component'
import { useCartStore } from '@store/CartStore'
import { computed } from 'vue'
const cartStore = useCartStore()
const quantity = computed(() => {
	return cartStore.cart.length
})
</script>

<style lang="scss" module>
@import '@scss/colors.scss';
.button {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	cursor: pointer;
	max-width: 100px;
	width: 100%;
	border: none;
	min-height: 40px;
	border-radius: 10px;
	background-color: white;
	transition: background-color 0.3s;
}
.icon {
	background-color: rgba(255, 255, 255, 0);
	fill: $primary;
	height: 30px;
	width: 30px;
	overflow: hidden;
	transition: fill 0.5s;
}
.quantity {
	font-weight: 700;
	font-size: 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid $primary;
	width: 25px;
	height: 25px;
	border-radius: 10px;
	color: $primary;
	transition: all 0.5s;
}
.button:hover {
	background-color: $unprimary;
	.icon {
		fill: white;
	}
	.quantity {
		color: white;
		border-color: white;
	}
}
</style>
