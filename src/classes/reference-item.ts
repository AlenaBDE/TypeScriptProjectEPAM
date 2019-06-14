import {timeout} from "../decorators";

export abstract class ReferenceItem {

    private _publisher: string;

    static department: string = 'Hello';

    constructor(public title:string, protected year:number){
        console.log('Creating a new ReferenceItem...')
    }

    @timeout(2000)
    printItem():void {
        console.log(`${this.title} ${this.year}`);
        console.log(ReferenceItem.department);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher:string){
        this._publisher = newPublisher;
    }

    abstract printCitation(): void;
}