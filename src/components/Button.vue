<template>
	<button
		class="main-btn"
		@click.stop
		:class="{
			primary: props.apperance === 'primary',
			unprimary: props.apperance === 'unprimary'
		}"
	>
		<slot />
	</button>
</template>

<script lang="ts" setup>
interface IButton {
	apperance: string
}
const props = withDefaults(defineProps<IButton>(), {
	apperance: 'primary'
})
</script>

<style lang="scss" scoped>
@import '@scss/colors.scss';
.main-btn {
	cursor: pointer;
	background-color: $primary;
	color: $light;
	position: relative;
	max-width: 100px;
	width: 100%;
	padding: 10px;
	min-height: 40px;
	border-radius: 10px;
	font-size: 1em;
	transition: all 0.2s;
	border: none;
}
.unprimary {
	background-color: $black;
}
.main-btn:hover {
	background-color: $light;
	color: $black;
}
.main-btn:hover::before {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	min-height: 40px;
	height: 100%;
	border-radius: 11px;
	border: 1px solid $black;
}
</style>
