import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useCategoriesStore } from './CategoriesStore'
import { useProductsStore } from './ProductsStore'
import { useRouter } from 'vue-router'

export const useGlobalStore = defineStore('globalStore', () => {
	const filterProductsByCategory = computed(() => {
		const productsStore = useProductsStore()
		const route = useRouter()
		const categoryId = Number(route.currentRoute.value.params.categoryId) // to update page
		const filteredProducts = productsStore.products.filter((product) =>
			product.categoryIds.includes(categoryId)
		)
		return filteredProducts
	})
	return {
		filterProductsByCategory
	}
})
