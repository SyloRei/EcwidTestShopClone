<template>
	<div :class="$style.container">
		<div :class="$style['image-container']">
			<img :class="$style['main-image']" :src="currentImage.thumbnailUrl" alt="main-image"/>
		</div>
		<div :class="$style['product-details']">
			<div :class="$style['details-header']">
				<h3 :class="$style.name">{{ product.name }}</h3>
				<h4 :class="$style.price">{{ product.price + ' $' }}</h4>
			</div>
			<ProductOptions
				:option="option"
				v-for="(option, index) in product.options"
				:key="index"
			/>
			<h4 :class="$style.info">Информация о товаре:</h4>
			<div
				id="product-description"
				:class="$style.description"
				v-html="product?.description"
			></div>
			<div :class="$style.gallery">
				<img
					@click="handleImageClick(img)"
					v-for="img in images"
					:key="img.id"
					:class="$style['img-from-gallery']"
					:src="img.thumbnailUrl"
					alt="product-image"
					height="100"
				/>
			</div>
			<Button
				style="max-width: none"
				:class="$style['buy-btn']"
				@click="checkInCart(product)"
				:apperance="'unprimary'"
				>{{ getStatus(product).value }}</Button
			>
		</div>
	</div>
</template>
<script lang="ts" setup>
import Button from '@components/Button.vue'
import { ref } from 'vue'
import { getStatus } from '@utils/CartUtils'
import { checkInCart } from '@utils/CartUtils'
import { IGalleryProductImages, IProduct } from '@interfaces/Product.interface'
import ProductOptions from './ProductOptions.vue'

const props = defineProps<{ product: IProduct }>()
const currentProduct = ref(props.product)
const images = ref([...currentProduct.value.galleryImages])
const currentImage = ref({
	id: 51245,
	thumbnailUrl: currentProduct.value.imageUrl
})
const handleImageClick = (img: IGalleryProductImages) => {
	images.value = images.value.concat(currentImage.value)
	currentImage.value = img
	images.value = images.value.filter((image) => image.id !== img.id)
}
</script>
<style lang="scss" module>
@import '@scss/colors.scss';
.container {
	display: flex;
	gap: 20px;
	margin: 0 auto;
	margin-top: calc(50px);
	align-items: center;
	padding: 10px;
	width: fit-content;
}
.image-container {
	max-width: 300px;
	width: 100%;
	height: 300px;
	flex: none;
	border-radius: 10px;
	overflow: hidden;
	position: relative;
}
.main-image {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	max-width: 300px;
}
.product-details {
	max-width: 800px;
	width: 100%;
	font-size: 1em;
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.info {
	font-weight: 100;
}
.details-header {
	text-align: start;
}
.description {
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-style: italic;
}
.gallery {
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}
.option {
	background-color: rgb(202, 202, 29);
	height: 100px;
	width: 100px;
}
.img-from-gallery {
	cursor: pointer;
	border: 1px solid $light;
	transition: all 0.3s;
}
.img-from-gallery:hover {
	border: 1px solid $black;
}

@media (max-width: 750px) {
	.container {
		flex-direction: column;
		margin-top: 0px;
	}
	.product-details {
		margin-bottom: 40px;
	}
	.buy-btn {
		position: fixed !important;
		width: calc(100vw - 10px) !important;
		z-index: 1000;
		margin: 5px;
		left: 0;
		bottom: 0;
	}
}
</style>
