export class RotaService{
    constructor(){
        this.obterRotas();
    }

    obterRotas(){
        const array = window.location.pathname.split('/');
        //console.log("array",array);
        this.raiz = array[1];
        this.schema = array[2];
        this.entidade = array[3];
        this.parametro = array[4];
        this.valor = array[5];
    }

    definirUrl(url = "/"){
        window.history.pushState({url}, url, window.location.origin + url);
        this.obterRotas();
    }

    definirFormView(classe,id){
        let caminho = `/Form/${classe}/id/${id}`;
        this.definirUrl(caminho);
    }

    definirFichaView(id){
        let caminho = `/Ficha/${this.schema}/${this.entidade}/id/${id}`;
        this.definirUrl(caminho);
    }

    definirAdministracaoView(schema,classe,pagina=null){
        if ((pagina==null) && (this.valor>0)){
            pagina = this.valor;            
        }

        if (pagina==null){
            pagina = 1;
        }
        let caminho = `/Administracao/${schema}/${classe}/pagina/${pagina}`;
        this.definirUrl(caminho);
    }

    rotaSistema(classe="Abertura"){
        let url = `/sistema/sistema/${classe}`;
        this.definirUrl(url);
    }
    definir(){
        let url = `/${this.raiz}/${this.schema}/${this.entidade}/${this.parametro}/${this.valor}`;
        this.definirUrl(url);
    }
    paginar(indice=0){
        if (indice == undefined){
            indice=0;
        }
        this.valor = indice;
        this.definir();
    }

    verificarIdentificador(){

        if (this.parametro != 'id'){
            return false;
        }

        if ((this.valor == "") ||
            (this.valor == 0) ||
            (this.valor == null) ||
            (this.valor == undefined)){
            return false;
        }

        return true;
    }
}