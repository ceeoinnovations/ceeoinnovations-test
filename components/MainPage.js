import Navbar from './Navbar.js';
import About from './About.js';
import Carousel from './Carousel.js';
import Website from './Websites.js';
import Footer from './Footer.js';
import Projects, {handleProjectFilter} from './Projects.js';

// create mainpage (home)
export default function MainPage(data){
    document.querySelector('.container').innerHTML = `
        ${Navbar('main', Object.keys(data))}
        ${About(data.about)}
        ${Carousel(data.projects)}
        ${Projects(data.projects)}
        ${Website(data.websites)}
        ${Footer(data.about)}
    `
    stringToArray(data.projects);
    handleProjectFilter(data);

    let flkty = new Flickity( '.carousel', {
        // options
        cellAlign: 'center',
        contain: true,
        autoPlay: true,
        wrapAround: true
    });
}

// convert comma-separated string to node-set
export function stringToArray(data){
    data.map(d => {
        d.tags = d.tags.split(', ').map(s=>s.trim());
    })
}