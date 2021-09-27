import Navbar from './Navbar.js';
import About from './About.js';
import Carousel from './Carousel.js';
import Footer from './Footer.js';
import Projects, {handleProjectFilter} from './Projects.js';

// create mainpage (home)
export default function MainPage(data){
    document.querySelector('.container').innerHTML = `
        ${Navbar('main', Object.keys(data))}
        ${About(data.about)}
        ${Carousel(data.projects)}
        ${Projects(data.projects)}
        ${Footer(data.about)}
    `
    stringToArray(data.projects);
    handleProjectFilter(data);

    let flkty = new Flickity( '.main-carousel', {
        // options
        cellAlign: 'center',
        contain: true
    });
}

// convert comma-separated string to node-set
export function stringToArray(data){
    data.map(d => {
        d.tags = d.tags.split(', ').map(s=>s.trim());
    })
}