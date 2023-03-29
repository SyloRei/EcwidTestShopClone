import axios from '@core/axios'

const STORE_ID = import.meta.env.VITE_STORE_ID
const TOKEN = import.meta.env.VITE_TOKEN

export const fetchProducts = async () => {
	try {
		const response = await axios({
			method: 'get',
			url: `${STORE_ID}/products`,
			params: {
				categories: 'home',
				includeProductsFromSubcategories: true
			},

			headers: {
				Authorization: 'Bearer ' + TOKEN
			}
		})
		return response
	} catch (error) {
		console.error(error)
	}
}

export const fetchProduct = async (productId: number) => {
	try {
		const response = await axios({
			method: 'get',
			url: `${STORE_ID}/products/${productId}`,
			params: {},
			headers: {
				Authorization: 'Bearer ' + TOKEN
			}
		})
		return response
	} catch (error) {
		console.error(error)
	}
}
