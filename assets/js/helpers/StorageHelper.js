export class StorageHelper {

    constructor(){
        throw new Error('Essa classe não pode ser instaciada.');
    }

    static limpar(){
        localStorage.clear();

    }

    static obter(chave=""){
        let data = JSON.parse(localStorage.getItem(chave));

        if (!(typeof data === 'undefined' || data === null)) {
            return  data;
        } else {
            return '';
        }
    }

    static definir(chave="chave",data={}){
        localStorage.setItem(chave,JSON.stringify(data));
    }

    static obterResposta(chave=""){
        let data = StorageHelper.obter(chave);

        if (!(typeof data.resposta === 'undefined' || data.resposta === null)) {
            return data.resposta;
        } else {
            return '';
        }
    }

    static obterId(chave=""){
        let data = this.obter(chave);
        if (data.id>0){
            return data.id;
        }  else {
            return 0;
        }
    }

    static obterAtributo(chave="", atributo=""){
        if((atributo=="")|| (chave=="")){
            return "";
        }

        let data = this.obter(chave);
        if ((data[atributo]== undefined) || (data[atributo] == null)){
            return "";
        }

        return data[atributo];

    }

    static definirCookie(chave="",str=""){
        document.cookie = `${chave}=${str}`;

    }
    static definirSessaoId(str){
        StorageHelper.definirCookie('session_id',str);
    }

    static definirCSRF(str){
        StorageHelper.definirCookie('csrf',str);
    }

    static obterSessaoId(){
        var match = document.cookie.match(new RegExp('(^| )session_id=([^;]+)'));
        if (match) return match[2];
    }

    static obterCsrf(){
        var match = document.cookie.match(new RegExp('(^| )csrf=([^;]+)'));
        if (match) return match[2];
    }

    static salvarTokens(obj){
        StorageHelper.definirSessaoId(obj.session_id);
        StorageHelper.definirCSRF(obj.csrf);
    }
}