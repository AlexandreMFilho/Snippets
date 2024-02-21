export class URLHelper {

    constructor(){
        throw new Error('Essa classe não pode ser instaciada.');
    }

    static getURL(u){
        //const  URL = `${window.location.origin}/v1`;
        const  URL = `http://localhost/api`;
        return URL+u;
    }
}