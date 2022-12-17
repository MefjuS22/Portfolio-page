export const heroOne = {
  reverse: true,
  inverse: true,
  topLine: {
    text: '',
  },
  headline: 'About Me',
  description:
    'I am a 20 year old Front-End Developer working in React with TypeScript',
  buttonLabel: 'Download CV',
  onClick: () => {
    const alink = document.createElement('a');
    alink.href = './Mateusz_Smyda_CV.pdf';
    alink.download = 'Mateusz_Smyda_CV.pdf';
    alink.click();
  },
  imgStart: 'start',
  img: '../components/Content/about_me.svg',
  start: 'true',
};
export const heroFour = {
  reverse: false,
  inverse: false,
  topLine: {
    text: 'Experience',
  },
  headline: 'Work Experience',
  description:
    'I currently work as Vue.js Front-end developer at ONX Center based in Cracow',

  imgStart: 'start',
  img: '../components/Content/working.svg',
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
  img: '../components/Content/education.svg',
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
  onClick: () => {
    window.open('https://github.com/MefjuS22/portfolio-page/tree/master');
  },
  imgStart: '',
  img: '../components/Content/projects.svg',
  start: 'true',
};
