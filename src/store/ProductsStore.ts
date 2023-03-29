import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchProduct, fetchProducts } from '@api/fetchProducts'
import { IProduct } from '@interfaces/Product.interface'
import { useRouter } from 'vue-router'
export const useProductsStore = defineStore('productsStore', () => {
	const products = ref([] as IProduct[])
	const productsByCategory = ref([] as IProduct[])
	const currentProduct = ref({} as IProduct)
	const router = useRouter()
	const status = ref<Boolean>(false)

	const setCurrentProduct = (product: IProduct) => {
		currentProduct.value = product
	}
	const getProducts = async () => {
		const res = await fetchProducts()
		const data = await res?.data.items
		products.value = data
		status.value = true
	}
	const getProduct = async () => {
		const productId = Number(router.currentRoute.value.params.id)
		const res = await fetchProduct(productId)
		const data = await res?.data
		currentProduct.value = data
	}
	//Useful in the future!!!
	const getProductsByCategory = async (productsIds: number[]) => {
		const promises = productsIds.map((productId) => {
			return fetchProduct(productId)
		})
		const productsArray = await Promise.all(promises)

		productsByCategory.value = await productsArray.map((product) => {
			return product?.data
		})
	}
	return {
		products,
		status,
		getProduct,
		getProducts,
		setCurrentProduct,
		currentProduct,
		productsByCategory,
		getProductsByCategory
	}
})
