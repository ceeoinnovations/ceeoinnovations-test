import fileIdFrom, {getImageURL} from './Images.js';
import MaterialIcon from './MaterialIcon.js';

// return HTML for project section
export default function Projects(projects){
    // decide what projects will show as default
    let defaultProjects = projects.filter(d=>{
        return d.status === 'Ongoing'; // filter by status
    });
    return `
    <section id="projects">
        <div class="wrapper">
            <div class="filter text-center">
                <input type="radio" name="project-filter" id="prj-item1" value="all" checked>
                <label for="prj-item1">All</label>

                <input type="radio" name="project-filter" id="prj-item2" value="featured">
                <label for="prj-item2">Featured</label>

                <input type="radio" name="project-filter" id="prj-item3" value="technology">
                <label for="prj-item3">Technology</label>

                <input type="radio" name="project-filter" id="prj-item4" value="teachingtool">
                <label for="prj-item4">Teaching Tool</label>
            </div>
            <div class="project-list">
                ${ProjectItems(projects)}
            </div>
        </div>
    </section>`
}

// return HTML for project items
export function ProjectItems(projects){
    return projects.map(d=>`
        <div class="project-box">
                <img src="${getImageURL(d.teaser)}" div class="teaser">
                <div class="info">
                    <div class="project-overview">
                        <div class="project-tags">
                            ${d.year}
                        </div>
                        <div class="project-title">
                            <a href="?project=${d.id}"><strong>${d.title}</strong></a>
                        </div>
                    <div class="project-subtitle">
                        ${d.subtitle}<br>
                    </div>
                    
                </div>
            </div> 
        </div>
    `).join('');
}

// filter projects by tags
export function handleProjectFilter(data){
    let conds = document.querySelectorAll('.filter input[name="project-filter"]');
    conds.forEach(cond=>cond.addEventListener('change', function(event){
        let checked = event.target.value; 
        if (checked==='all'){
            // show all projects except for private ones
            let AllProjects = data.projects.filter(d=>{
                return d.status !== 'Private'; 
            });
            document.querySelector('.project-list').innerHTML = ProjectItems(AllProjects);
        }else{
            let filtered = data.projects.filter(d=>{
                return d.tags.some(tag=>checked === tag.toLowerCase());
            });
            document.querySelector('.project-list').innerHTML = ProjectItems(filtered);
        }
    }));
}