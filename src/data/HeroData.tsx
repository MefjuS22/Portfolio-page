

export const heroOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: '',
	},
	headline: "About Me",
	description: 'I am a 20 year old Front-End Developer working in React with TypeScript with ambition to become a Full-Stack Developer :)',
	buttonLabel: 'Download CV',
    onClick: () => {
        let alink = document.createElement('a');
                alink.href = './Mateusz_Smyda_CV.pdf';
                alink.download = 'Mateusz_Smyda_CV.pdf';
                alink.click();
    },
	imgStart: 'start',
	img: require('../components/Content/programmer.png'),
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
	imgStart: 'start',
	img: require('../components/Content/school.png'),
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
		"Below you can check some of the projects I've been working on or if you want you can check the source code of this website!",
	buttonLabel: 'View Code',
    onClick: ()=>{
        window.open('https://github.com/MefjuS22/portfolio-page/tree/master')
      },
	imgStart: '',
	img: require('../components/Content/clipboard.png'),
	start: 'true',
};