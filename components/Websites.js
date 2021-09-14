import fileIdFrom, {getImageURL} from './Images.js';

// return HTML for the partner website section
export default function Website(websites){
    // decide what projects will show as default
    let defaultProjects = websites.filter(d=>{
        return d.featured === 'Featured'; // filter by status
    });
    console.log(defaultProjects);
    return `
    <section id="carousel">
        <div class="wrapper">
            <div class="main-carousel"  data-flickity-options='{"imagesLoaded": true, "initialIndex": 2, "freeScroll": true, "autoPlay": true, "contain": true, "wrapAround": true }'>
                ${CarouselItems(defaultProjects)}
            </div>
        </div>
    </div>
`
}

// return HTML for partner website items
export function WebsiteItems(websites){
    return websites.map(d=>`
        <div class="website-box">
            <img src="${getImageURL(d.teaser)}" div class="website-teaser">
            <div class="info">
                <div class="project-overview">
                    <div class="project-title">
                        <a href"?project=${d.id}" target="_blank"><strong>${d.title}</strong></a>
                    </div>
                    <div class="project-subtitle">
                        ${d.subtitle}<br>
                    </div>
                </div>
            </div> 
        </div>
    `).join('');
}

export function CarouselItems(websites){
    return websites.map(d=>`
    <div class="gallery-cell" data-flickity-lazyload-src="assets/global/teaser.png"></div>
    `).join('');
}

export function Test(websites){
    return websites.map(d=>`
    <div class="carousel-cell"
    data-flickity-bg-lazyload="${getImageURL(d.teaser)}"></div>
    `).join('');
}
