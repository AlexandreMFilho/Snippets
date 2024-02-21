import { TransporteService } from "../services/TransporteService.js";
import { CabecalhoView } from "./CabecalhoView.js";
import { RodapeView } from "./RodapeView.js";

export class BaseView{
    constructor(){
        this.classForm = 'form-group';
        
        this.iniciarBase();
    }

    iniciarBase(){  
            this.transporte = new TransporteService();    
            this.cabecalho = new CabecalhoView(); 
            this.rodape = new RodapeView(); 
    }

    obterDadosForm(){
        this.form = document.querySelectorAll(`.${this.classForm}`);
        this.dados = {};
        if(this.form){
            for (let i in this.form){
                if (this.form[i].nodeType !== 1) {
                    continue;
                }
                this.dados[this.form[i].name] = this.form[i].value;
            }

        }

        return  this.dados;        
    }
}