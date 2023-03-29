<template>
	<div class="container">
		<div class="img-container">
			<img class="image" :src="category.thumbnailUrl" height="200" />
			<h4 class="name">{{ category.name }}</h4>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ICategory } from '@interfaces/Category.interface'
const props = defineProps<{ category: ICategory }>()
</script>

<style lang="scss" scoped>
@import '@scss/colors.scss';
.container {
	width: 100%;
	cursor: pointer;
	color: $light;
	max-width: 200px;
	text-align: center;
	border-radius: 10px;
	position: relative;
	transition: all 0.2s;
}
.container::before {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	max-width: 200px;
	width: 100%;
	border-radius: 10px;
	transform: translate(-50%, -50%);
	transition: all 1s;
}

.img-container {
	display: flex;
	position: relative;
	justify-content: center;
	border-radius: 10px;
	max-height: 200px;
	max-width: 200px;
	height: 100%;
	width: 100%;
	overflow: hidden;
	box-shadow: 2px 2px 4px $black;
}
.name {
	position: absolute;
	z-index: 20;
	font-size: 1em;
	font-weight: 100;
	color: white;
	background-color: rgba(0, 0, 0, 0.637);
	padding: 10px;
	border-radius: 20px;
	top: 50%;
	width: 100%;
	word-break: break-all;
	left: 50%;
	transform: translate(-50%, -50%);
}
.image {
	transition: transform 1s;
}
.container:hover {
	.image {
		transform: scale(1.2);
	}
	transform: scale(1.06);
}
.container:hover::before {
	content: '';
	border: 1px solid $unprimary;
	position: absolute;
	top: 50%;
	width: 100%;
	height: 100%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
