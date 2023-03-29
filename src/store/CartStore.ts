import { IProduct } from '@interfaces/Product.interface'
import { defineStore } from 'pinia'
import { ref, watch, computed } from 'vue'

export const useCartStore = defineStore('cartStore', () => {
	const cart = ref([] as IProduct[])
	const cartItemsInLocalStorage = localStorage.getItem('cart')
	if (cartItemsInLocalStorage) {
		cart.value = JSON.parse(cartItemsInLocalStorage)._value
	}
	const getFullPrice = computed(() => {
		return cart.value.reduce((sum: number, item) => {
			return sum + item.price
		}, 0)
	})
	const checkCart = (productId: number): boolean => {
		return cart.value.some((item) => item.id === productId)
	}
	const addToCart = (product: IProduct) => {
		if (!checkCart(product.id)) {
			cart.value = [...cart.value, product]
		}
	}
	const deleteFromCart = (product: IProduct) => {
		cart.value = cart.value.filter((item) => {
			return item.id !== product.id
		})
	}
	watch(
		() => cart,
		(state) => {
			localStorage.setItem('cart', JSON.stringify(state))
		},
		{
			deep: true
		}
	)
	return {
		cart,
		getFullPrice,
		addToCart,
		deleteFromCart,
		checkCart
	}
})
