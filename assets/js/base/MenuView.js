export class MenuView{
    constructor(){
        this.tag = document.querySelector('.navbar-nav');
        if (this.tag) {
            this.renderizar();
        }
    }
    renderizar(){
        this.tag.innerHTML = `


            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Manutenção</a>
            </li>

            
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Carregar Dados</a>
            </li>
        `;

    }
    adicionarItem(str=""){
        return  `
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">${str}</a>
        </li>
        `;
    }

    
}



/*

                <li class="dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown01">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>  
*/