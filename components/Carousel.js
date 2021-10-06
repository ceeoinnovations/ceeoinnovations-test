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
            <div class="carousel">
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
        <a href="?project=${d.id}" class="carousel-cell-content">
        <img src="${getImageURL(d.teaser)}" alt="orange tree" />
            <div class="card__content">
                <h2>${d.title}</h2><p>${d.subtitle}</p>
            <a class="button" href="?project=${d.id}">VIEW</a>
            </div>
        </a>
    </div>
    `).join('');
}
