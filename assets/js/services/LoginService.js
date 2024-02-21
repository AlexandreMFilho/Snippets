import { URLHelper } from "../helpers/URLHelper.js";
import {HttpService} from "./HttpService.js"
export class LoginService{

    constructor(){
        this.http = new HttpService();
    }

     obter(url){

        return  this.http
                .get(url)
                .then(objeto =>{
                    return objeto;
                })
                .catch(erro=>{
                    console.log('ERRO',erro);
                    throw new Error('Não foi possível obter dados da requisição');
                });    
     }

     enviar(login){
         //console.log('POST LOGIN: ',login);
            return this.http
                 .post(URLHelper.getURL('/login'),login)
                 .then((res)=>{
                    //console.log(res); 
                    return res;
                 })
                 .catch(erro=>
                    {console.log("ERRO NO SERVICE: ",erro)
                    return erro;
                    });
     }

}
