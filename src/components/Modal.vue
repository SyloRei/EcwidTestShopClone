<template>
	<div :class="$style.container">
		<div :class="$style.modal">
			<slot />
			<button :class="$style.button" @click="$emit('close-btn')">X</button>
		</div>
	</div>
</template>
<script lang="ts" setup></script>
<style lang="scss" module>
@import '@scss/colors.scss';
.container {
	top: 0;
	left: 0;
	backdrop-filter: blur(5px);
	z-index: 1;
	width: 100vw;
	height: 100vh;
	position: fixed;
}
.modal {
	backdrop-filter: blur(5px);
	z-index: 20;
	top: 50%;
	left: 50%;
	background-color: $primary;
	width: calc(100vw - 100px);
	height: calc(100vh - 100px);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50px;
	font-size: 2em;
	color: $light;
	text-shadow: 2px 2px 1px $black;
	transform: translate(-50%, -50%);
	position: relative;
}
.button {
	cursor: pointer;
	position: absolute;
	top: 50px;
	right: 50px;
	font-size: 0.8em;
	border: none;
	background-color: $black;
	color: $light;
	width: 40px;
	height: 40px;
	border-radius: 10px;
}
.button:hover {
	opacity: 0.8;
}
</style>
