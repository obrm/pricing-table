const features = [
	'Unlimited calls',
	'Free hosting',
	'500 MB of storage space',
	'500 MB Bandwidth',
	'24/7 support',
];

const pricingCards = [
	{
		title: 'Basic',
		price: 49,
		isFeatureIncluded: [
			true,
			true,
			true,
			false,
			false,
		],
		borderColor: 'green',
		buttonText: 'Get Started',
	},
	{
		title: 'Standard',
		price: 59,
		isFeatureIncluded: [
			true,
			true,
			true,
			true,
			false,
		],
		borderColor: 'purple',
		buttonText: 'Get Started',
	},
	{
		title: 'Enterprise',
		price: 89,
		isFeatureIncluded: [
			true,
			true,
			true,
			true,
			true,
		],
		borderColor: 'pink',
		buttonText: 'Get Started',
	},
];

export { features, pricingCards };
