import hepsiorada from '../Media/hepsiorada.jpg'
import moviesapp from '../Media/MoviesApp.png'
import keepsafe from '../Media/keepsafe.png'
import githubprofileFinder from '../Media/gpfinder.png'
import currencyapp from '../Media/currencyapp.png'

export const PROJECTS = [
    {
      id: '1',
      title: 'HepsiOrada',
      description:
        'HepsiOrada is an open-source ecommerce website built on the Django Web Framework.',
      image: {
        src: hepsiorada
      },
      links: {
        site: 'https://hepsiorada.herokuapp.com/',
        repo: 'https://github.com/Muhammet-Yildiz/HepsiOrada',
      },
      technologies: [
        '#javascript',
        '#jquery',
        '#django',
        '#htmi5',
        '#css3',
        '#slick-slider'
      ],
    },
    {
      id: '2',
      title: 'MoviesAPP',
      description:
        'MoviesAPP is movie gallery created using React Hooks, Context API and React Router. The Routes were setup for three default pages and a search page. Also the movies were displayed using the Tmdb API and Axios to fetch data.',
      image: {
        src:moviesapp
       
      },
      links: {
        site: 'https://moviegalleryapp.netlify.app/',
        repo: 'https://github.com/Muhammet-Yildiz/MoviesAPP',
      },
      technologies: [
        '#reactjs',
        '#react-hooks',
        '#react-router',
        '#react-bootstrap',
        '#axios',
        '#tmdb-api',
        '#context-api',
        '#localstorage',
      ],
    },
    {
      id: '3',
      title: 'Keepsafe',
      description:
        'Keepsafe is a photo gallery app built with react and firebase. You can easily upload your photos. Your photos are safe here.',
      image: {
        src: keepsafe
       
      },
      links: {
        site: 'https://keepsafe.netlify.app/',
        repo: 'https://github.com/Muhammet-Yildiz/Keepsafe',
      },
      technologies: [
        '#reactjs',
        'firebase-firestore',
        '#react-hooks',
        '#framer-motion',
      ],
    },
    {
      id: '4',
      title: 'Github Profile Finder',
      description:
        'Create a Github Profile Finder With JavaScript',
      image: {
        src: githubprofileFinder
      
      },
      links: {
        site: '#!',
        repo: 'https://github.com/Muhammet-Yildiz/Github-Profile-Finder',
      },
      technologies: [
        '#html-css-javascript',
        '#github-api',
        '#localstorage',
      ],
    },
    {
      id: '5',
      title: 'Foreign Currency App',
      description:
        'Create a Foreign Currency App With JavaScript',
      image: {
        src: currencyapp
       
      },
      links: {
        site: '#!',
        repo: 'https://github.com/Muhammet-Yildiz/Foreign-Currency-App',
      },
      technologies: [
        '#html-css-javascript',
        '#exchangeratesapi',
      ],
    },
  ];