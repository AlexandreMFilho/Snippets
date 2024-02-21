import {HttpService} from "./HttpService.js"
import {PostFileService} from "./PostFileService.js"
import { URLHelper } from "../helpers/URLHelper.js";
import { StorageHelper } from "../helpers/StorageHelper.js";

export class TransporteService{

    constructor(){
        this.http = new HttpService();
        this.postFile = new PostFileService();
    }

     obter(url){
        let tokens = {}
        tokens.token = localStorage.getItem('depg-token');
        console.log("URL",url);
        return  this.http
                .get(URLHelper.getURL(url), tokens)
                .then((obj)=>{StorageHelper.salvarTokens(obj);return obj})
                //.then(objeto => objeto)
                .catch(erro=>erro);    
     }

     obterArquivo(url){
        let token = StorageHelper.obter('depg-token');

        return  this.postFile
                .get(URLHelper.getURL(url), token)
                .then(objeto =>{

                    return objeto;
                })
                .catch(erro=>{
                    console.log('ERRO',erro);
                    throw new Error('Não foi possível obter dados da requisição');
                });    
     }

     enviar(url,data){
        console.log(data);

           if ((data._token == undefined) || (data._token == "")){
           // app.modalMensagem.exibir("nao foi possível identicar o token de comunicação.");
           }
           let tokens = localStorage.getItem('depg-token');
           return this.http
                .post(URLHelper.getURL(url),data, tokens)
                .then((res)=>{
                   if (res.status==811){
                    console.log("*******************************");
                   }
                   return res;
                })
                .catch(erro=>
                   {console.log("**ERRO NO SERVICE: ",erro)
                   return erro;
                   });
    }

    editar(url,data){
        let token = localStorage.getItem('depg-token');
        return this.http
             .put(URLHelper.getURL(url),data, token)
             .then((res)=>{
                //console.log(res); 
                return res;
             })
             .catch(erro=>
                {console.log("**ERRO NO SERVICE: ",erro)
                return erro;
                });
    }

    excluir(url,data){
        let token = localStorage.getItem('depg-token');
        return this.http
            .delete(URLHelper.getURL(url),data, token)
            .then((res)=>{
                //console.log(res); 
                if (res.status==811){
                console.log("*******************************");
                }
                return res;
            })
            .catch(erro=>
                {console.log("**ERRO NO SERVICE: ",erro)
                return erro;
                });
    }

    enviarArquivo(url,data){
        let token = localStorage.getItem('depg-token');
        return this.postFile
        .post(URLHelper.getURL(url),data, token)
        .then((res)=>res.json())
        .then(res=>res)
        .catch(erro=>erro);
    }

}