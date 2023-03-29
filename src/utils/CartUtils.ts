import { IProduct } from '@interfaces/Product.interface'
import { useCartStore } from '@store/CartStore'
import { computed } from 'vue'

export const getStatus = (product: IProduct) => {
	const cartStore = useCartStore()
	return computed(() => {
		return cartStore.checkCart(product.id) ? 'Удалить' : 'Купить'
	})
}

export const checkInCart = (product: IProduct) => {
	const cartStore = useCartStore()
	const foundProduct = cartStore.checkCart(product.id)
	if (foundProduct) {
		cartStore.deleteFromCart(product)
	} else {
		cartStore.addToCart(product)
	}
}
