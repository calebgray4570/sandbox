
export interface IActiveApplications {
    activeApplications: Array<any>;
    activeApplicationsID: any;
}

export class ActiveApplications {
    activeApplications: Array<any>;
    activeApllicationsID: any;

    constructor(obj: IActiveApplications) {
        this.activeApplications = obj['results'] || []

        // let appArray = []
        // obj['results'].forEach( element => {
        //     appArray.push(element.uuid)
        // })
        // this.activeApllicationsID = new Set(appArray) || new Set()
        // console.log('this.activeApllicationsID: ', this.activeApllicationsID);
    }
}