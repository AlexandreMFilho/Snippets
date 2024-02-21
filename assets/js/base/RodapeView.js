export class RodapeView{

    constructor(){
        this.tag = document.querySelector('footer');
        if (this.tag) {
            this.renderizar();
        }
    }

    renderizar(){
        this.tag.innerHTML = `esse é o rodapé`;
    }

    
}