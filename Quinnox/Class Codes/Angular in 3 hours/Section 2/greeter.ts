export interface Setting {
    title:string;
    name:string
}

export class Greeter {
    private _title:Setting; 

    get title():Setting {
        return this._title;
    }
    set title(msg: Setting) {
        this._title = msg;
    }
}
