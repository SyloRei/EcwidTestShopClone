<template lang="">
	<div class="container">
		<li id="first-ball"></li>
		<li id="second-ball"></li>
		<li id="third-ball"></li>
	</div>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
.container {
	display: flex;
	gap: 2px;
}
#first-ball,
#second-ball,
#third-ball {
	width: 20px;
	height: 20px;
	list-style: none;
	animation: LoadingAnimation infinite 1s;
	border-radius: 50%;
}
#first-ball {
	animation-delay: 0.1s;
}
#second-ball {
	animation-delay: 0.2s;
}
#third-ball {
	animation-delay: 0.3s;
}

@keyframes LoadingAnimation {
	0% {
		background: rgb(0, 0, 0);
		opacity: 0;
	}

	50% {
		background: rgb(94, 92, 92);
		opacity: 1;
	}

	100% {
		background: rgb(0, 0, 0);
		opacity: 0;
	}
}
</style>
