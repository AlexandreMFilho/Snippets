import { MenuView } from "./MenuView.js";

export class CabecalhoView{

    constructor(){
        this.tag = document.querySelector('header');
        if (!this.tag) {
            console.log('Não foi possível encontrar a tag header');
            return;
        }
        this.renderizar();
        this.menu = new MenuView();

    }

    renderizar(){
        this.tag.innerHTML = `
                    <nav class="navbar bg-body-primary fixed-top">
                    <div class="container-fluid ">
                    <a class="navbar-brand" href="#"><img src="../assets/imgs/logo-uerj.svg"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        M
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            

                        </ul>
            
                        </div>
                    </div>
                    </div>
                </nav>
        `
        ;
    }

    
}

/*
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                            </li>

                            <li class="dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdown01">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li>  
*/