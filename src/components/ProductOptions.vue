<template>
	<div :class="$style.container">
		<p :class="$style['option-name']">{{ option.nameTranslated.ru }}</p>
		<div v-for="(choice, index) in option.choices" :key="index">
			<label>
				<input type="radio" :value="choice.text" v-model="selectedChoice" />
				{{ choice.textTranslated.ru }}
			</label>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { IRadioOption } from '@interfaces/Product.interface'
import { ref } from 'vue'
const props = defineProps<{ option: IRadioOption }>()
const selectedChoice = ref<number>(0)
</script>

<style lang="scss" module>
.container {
	display: flex;
	flex-direction: column;
	gap: 5px;
}
.option-name {
	font-weight: 100;
}
</style>
