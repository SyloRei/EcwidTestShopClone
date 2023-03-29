<template>
	<BaseLayout>
		<CategoriesContainer v-show="categoriesStore.status" />
		<ProductsContainer
			v-show="productsStore.status"
			:products="productsStore.products"
			style="margin-top: 10px"
		/>
		<Loading v-if="!loadingComplete" :class="$style.loading" />
	</BaseLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseLayout from '@layouts/BaseLayout.vue'
import { useProductsStore } from '@store/ProductsStore'
import { useCategoriesStore } from '@store/CategoriesStore'
import ProductsContainer from '@containers/ProductsContainer.vue'
import CategoriesContainer from '@containers/CategoriesContainer.vue'
import Loading from '@components/Loading.vue'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

const productsLoaded = computed(() => productsStore.status)
const categoriesLoaded = computed(() => categoriesStore.status)
const loadingComplete = computed(
	() => productsLoaded.value && categoriesLoaded.value
)
</script>

<style lang="scss" module>
.loading {
	margin-top: 20px;
	display: flex;
	justify-content: center;
}
</style>
