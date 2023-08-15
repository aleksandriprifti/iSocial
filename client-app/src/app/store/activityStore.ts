import {makeAutoObservable, runInAction } from "mobx";
import { Activity } from "../models/activity";
import agent from "../api/Agent";


export default class ActivityStore {
   activities: Activity[] = [];
   selectedActivity: Activity | undefined = undefined;
   editMode = false;
   loading = false;
   loadingInitial = false;
    
    constructor() {
        makeAutoObservable(this)
    }

    loadActivities = async () => {
        this.loadingInitial = true;
        try {
            const activities = await agent.Activities.list();
            runInAction(() => {
                activities.forEach(activity => {
                activity.date = activity.date.split('T')[0];
                this.activities.push(activity);
            })
            this.loadingInitial = false;
            });
            
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loadingInitial = false;
            })
            
        }
    }

    selectActivity = (id: string ) => {
        this.selectedActivity = this.activities.find(a => a.id == id);
    }
}