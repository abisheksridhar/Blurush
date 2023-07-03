import { action, makeObservable, observable } from "mobx"

class ServiceStore{
    selectedService={}

    constructor(){
        makeObservable(this,{
            selectedService:observable,
            addSelectedService:action,
            getSelectedService:action,
            removeSelectedService:action,
        })
    }

    addSelectedService(selectedService){
        this.selectedService= selectedService;
    }
    getSelectedService(){
        return this.selectedService;
    }
    removeSelectedService(){
        this.selectedService={}
    }
}

export default new ServiceStore();