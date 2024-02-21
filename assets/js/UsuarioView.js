import { BaseView } from "./base/BaseView.js";

export class UsuarioView extends BaseView{    
    constructor() {
        super();
        this.classForm = 'form-usuario';
        console.log(this.constructor.name);
        //this.obterDados();

    }

    obterDados(){
        this.transporte.obter("/obterTabela")
          .then((obj)=>this.preencher(obj));
    }

    validar(){
        let valido = false;
        this.obterDadosForm();

        for(let i in this.dados){
            if(this.dados[i] == ""){
                valido = true;
                console.log("Campo vazio: " + this.dados[i]);
                continue;
            }
            console.log("Campo preenchido: " + this.dados[i]);

        }        

    }

    preencher(obj){       

    }


}

window.view = new UsuarioView();