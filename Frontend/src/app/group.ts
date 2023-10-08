export class Group {
    name?:string;
    members?:string[];
    channels?:string[];
    constructor(name:string='',members:string[]=[''],channels:string[]=['']){
       
        this.name = name;
        this.members = members;
        this.channels = channels;
    }
}
