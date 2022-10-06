export const heroOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: '',
	},
	headline: "About Me",
	description: 'I am 20 year old Front-End Developer working in React with Typescript since march 2022',
	buttonLabel: 'Download CV',
	imgStart: 'start',
	img: '../../public/assets/svg/education.svg',
	start: 'true',
};

export const heroTwo = {
	reverse: false,
	inverse: false,
	topLine: {
		text: 'Education',
	},
	headline: 'I study Computer Science at WSB-NLU University since 2022',
	description: '',
	buttonLabel: 'View Project',

	linkTo: '/more',
	imgStart: 'start',
	img: '../../public/assets/svg/education.svg',
	start: 'true',
};

export const heroThree = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Check my work',
	},
	headline: 'My Projects',
	description:
		"Below you can check some of the projects I've been working on or if you want you can check source code of this website!",
	buttonLabel: 'View Code',

	linkTo: '/#/contact',
	imgStart: '',
	img: require('../components/Content/education.png'),
	start: 'true',
};