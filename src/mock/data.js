import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jason Hoang',
  lang: 'en',
  description: 'Porfolio',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jason Hoang',
  subtitle: 'I am a freelance iOS developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am an iOS developer with several years of experience.',
  paragraphTwo: 'Since 2014, I had several collaborations with individual professionals, small businesses and large companies involved in design and development of web and mobile applications, some of them with server side configurations too.',
  paragraphThree: ' I have serious passion for smart UI design and friendly user experiences.',
  resume: 'https://drive.google.com/file/d/1y4ycz8KvuFHQZaWyscEzircMLk9rkyM8/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'needydelivery.jpg',
    title: 'Needy Delivery',
    info: 'Needy Delivery for an app for delivering food to people in need.',
    info2: '',
    url: 'https://www.needydelivery.org/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'dweebsglobal.jpg',
    title: 'Dweebs Global',
    info: 'Dweebs Global is an organization to provide free mentorship to people all over the world.',
    info2: '',
    url: 'https://dweebsglobal.org/',
    repo: ''
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jason.hoang@haighten.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Jacenhw7',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/the-jason-hoang/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/SmoothMaverick',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
