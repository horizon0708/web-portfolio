import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import Projects from '../data/Projects.json';


// TODO: get rid of window.projectStore on build.

class ProjectStore extends EventEmitter {
    constructor() {
        super();
        this.projects = [];
    }

    // load, save data 
    loadData(){
        this.projects = Projects;
        this.emit("change");
    }

    /// get
    getAll() {
        return this.projects;
    }

    getFeatured() {
        return this.projects.filter(x => x.featured === true );
    }

    getProject(id){
        return this.projects.filter(x => x.id === id)[0];
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
export default projectStore;