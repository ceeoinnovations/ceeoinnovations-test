
import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
import Navbar from './components/Navbar.js';
import People from './components/People.js';

// load csv files and populate data
Promise.all([
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQWHWeWDTmVlkihEIUGiNc7lofcA_idb_D37YDZbE3PnZJBGuOYKzxEBYgIICH2gj-7cvN4iLMU0Am4/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQmj9tmeplHm4rz6i83hSrmPR1kjZpP7vrZ7Ce635CnRm6DMUUWyJs2TGIoxN2cawwU0EDxnEkVo6Ip/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQc06WzfLUNTqwCihXC_i-CtXKUP5YObm4VcKGlO5tXRwSBflufHpwxmYLw5cUevdrYRXrp8a229-7A/pub?output=csv"), 
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vSDucAT1VEx7gg3qRxwURLDBXm_Du7aT4lBGue-xWwr5KQ37bmr48ASP3Zo_xEQpx6UWPi006587LjV/pub?output=csv") 
      ])
      .then(([about, websites, projects, people]) => {
        const data = {about, websites, projects, people};
        console.log(data);

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



