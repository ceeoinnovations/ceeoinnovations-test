import fileIdFrom, {getImageURL} from './Images.js';

// return HTML for the partner website section
export default function Carousel(projects){
    // decide what projects will show as default
    let defaultProjects = projects.filter(d=>{
        return d.featured === 'Featured'; // filter by status
    });
    return `
    <section id="carousel">
        <div class="wrapper">
            <div class="main-carousel"  data-flickity-options='{"imagesLoaded": true, "freeScroll": true, "autoPlay": true, "contain": true, "wrapAround": true }'>
                ${CarouselItems(defaultProjects)}
            </div>
        </div>
    </section>
`
}

// return HTML for carousel items
export function CarouselItems(projects){
    return projects.map(d=>`
    <div class="carousel-cell">
        <img src="${getImageURL(d.teaser)}" alt="orange tree" />
        <div class="card__content"><a href="?project=${d.id}"><h2>${d.title}</h2><p>${d.subtitle}</p></a></div>
    </div>
    `).join('');
}
