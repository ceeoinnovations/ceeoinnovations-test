import fileIdFrom, {getImageURL} from './Images.js';

// return HTML for the partner website section
export default function Website(websites){
    return `
    <section id="websites">
        <div class="wrapper">
            <h1 class="title-small">Partner Websites</h1>
            <div class="website-list">
                ${WebsiteItems(websites)}
            </div>
        </div>
    </section>`
}

// return HTML for partner website items
export function WebsiteItems(websites){
    return websites.map(d=>`
        <a href="${d.link}" target="_blank" class="website-box">
            <img src="${getImageURL(d.teaser)}" div class="website-teaser">
            <div class="website-info">
                <div class="project-overview">
                    <div class="website-title">
                        <strong>${d.title}</strong>
                    </div>
                    <div class="website-subtitle">
                        ${d.description}<br>
                    </div>
                </div>
            </div> 
        </a>
    `).join('');
}
