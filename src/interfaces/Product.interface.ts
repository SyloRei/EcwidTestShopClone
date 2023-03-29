export interface IProduct {
	id: number
	name: string
	price: number
	imageUrl: string
	thumbnailUrl: string
	smallThumbnailUrl: string
	description: string
	categoryIds: number[]
	galleryImages: IGalleryProductImages[]
	options: IRadioOption[]
}

export interface IGalleryProductImages {
	id: number
	thumbnailUrl: string
}

export interface IRadioOption {
	type: string
	name: string
	nameTranslated: { [key: string]: string }
	choices: ProductOptionChoice[]
	defaultChoice: number
	required: boolean
}
interface ProductOptionChoice {
	text: string
	textTranslated: { [key: string]: string }
	priceModifier: number
	priceModifierType: string
}
