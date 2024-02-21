import { BaseView } from "./base/BaseView.js";

export class EventoView extends BaseView{
    constructor() {
        super();
        console.log(this.constructor.name);
        //this.obterDados();

    }

    obterDados(){
        this.transporte.obter("/obterTabela")
          .then((obj)=>this.preencher(obj));
    }

    preencher(obj){       

    }


}

window.view = new EventoView();