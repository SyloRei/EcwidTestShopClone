import axios from '@core/axios'

const STORE_ID = import.meta.env.VITE_STORE_ID
const TOKEN = import.meta.env.VITE_TOKEN

export const fetchCategories = async () => {
	try {
		const response = await axios({
			method: 'get',
			url: `${STORE_ID}/categories`,
			params: {
				productIds: true
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
export const fetchCategory = async (id: number) => {
	try {
		const response = await axios({
			method: 'get',
			url: `${STORE_ID}/categories/${id}`,

			headers: {
				Authorization: 'Bearer ' + TOKEN
			}
		})
		return response
	} catch (error) {
		console.error(error)
	}
}
