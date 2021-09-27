
import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
import Navbar from './components/Navbar.js';

// load csv files and populate data
Promise.all([
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQWHWeWDTmVlkihEIUGiNc7lofcA_idb_D37YDZbE3PnZJBGuOYKzxEBYgIICH2gj-7cvN4iLMU0Am4/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQc06WzfLUNTqwCihXC_i-CtXKUP5YObm4VcKGlO5tXRwSBflufHpwxmYLw5cUevdrYRXrp8a229-7A/pub?output=csv"), 
      ])
      .then(([about, projects]) => {
        const data = {about, projects};
        // console.log(data);

    // determine what page to render
    let params = new URLSearchParams(window.location.search);
    if (params.get('project')==null){
        MainPage(data);
    }else{
        let project = data.projects.find(d=>d.id===params.get('project'));
        Navbar('project')
        ProjectPage(project, about);
    }
});



