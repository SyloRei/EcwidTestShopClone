<template>
	<BaseLayout>
		<div class="main" v-if="cartStore.cart.length">
			<div class="items">
				<TransitionGroup name="animation">
					<ItemCart
						v-for="product in cartStore.cart"
						:product="product"
						:key="product.id"
					></ItemCart>
				</TransitionGroup>
			</div>
			<div class="final-cost">
				{{ 'Итого: ' + cartStore.getFullPrice + ' $' }}
			</div>
			<Button :apperance="'primary'" class="buy-btn" @click="isOrdered = true">
				Оформить заказ
			</Button>
			<Modal @close-btn="closeModal" v-if="isOrdered">Спасибо за покупку</Modal>
		</div>
		<div v-else class="empty">В корзине ничего нет.</div>
	</BaseLayout>
</template>

<script setup lang="ts">
import { useCartStore } from '@store/CartStore'
import Button from '@components/Button.vue'
import { ref } from 'vue'
import BaseLayout from '@layouts/BaseLayout.vue'
import ItemCart from '@components/ItemCart.vue'
import Modal from '@components/Modal.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const isOrdered = ref(false)
const cartStore = useCartStore()
const closeModal = () => {
	router.push({
		name: 'home'
	})
	cartStore.cart = []
}
</script>

<style lang="scss" scoped>
@import '@scss/colors.scss';

.main {
	margin: 0 auto;
	max-width: 800px;
	width: calc(100% - 10px);
	padding: 10px;
	background-color: $black;
	height: fit-content;
	display: flex;
	border-radius: 10px;
	flex-direction: column;
	gap: 10px;
}

.items {
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	gap: 10px;
	overflow-y: scroll;
	max-height: 400px;
}

.buy-btn {
	margin: 0 auto;
}
.final-cost {
	color: $light;
	text-align: center;
}
.empty {
	font-size: 2em;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.animation-leave-active {
	transition: all 0.3s;
}

.animation-enter-from,
.animation-leave-to {
	transform: translateX(-150px);

	opacity: 0;
}
</style>
