import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import Projects from '../data/Projects.json';


// TODO: get rid of window.projectStore on build.

class ProjectStore extends EventEmitter {
    constructor() {
        super();
        this.projects = [{
            id: 101,
            name: "test",
            codepen: "",
            github: "",
            page: "",
            description: "",
            thumbnail: "" // link to thumbnail?
        }];

    }

    // load, save data 
    loadData(){
        // Projects.readFile('../data/Projects.json', 'json', (err, data)=>{
        //     console.log(data);
        // })
        //console.log(Projects);
        this.projects = Projects;
        this.emit("change");
        console.log(this.projects);
    }

    /// get
    getAll() {
        return this.projects;
    }

    getProject(id){

    }

    handleActions(action) {
        switch (action.type) {
            case "LOAD_DATA": {
                this.loadData(action.data);
                break;
            }
            default: {
                break;
            }
        }
    }
}

const projectStore = new ProjectStore();
window.projectStore = projectStore;
dispatcher.register(projectStore.handleActions.bind(projectStore));