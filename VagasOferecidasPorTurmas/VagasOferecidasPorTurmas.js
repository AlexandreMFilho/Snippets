import { BaseView } from "../assets/js/base/BaseView.js";

export class VagasOferecidasPorTurmas extends BaseView {    
    constructor() {
        super();
        this.classForm = 'form-vagas-oferecidas';
        console.log(this.constructor.name);
        //this.obterDados();

        $('#example').DataTable({
            "language": {
                "lengthMenu": "Exibir _MENU_ registros por página",
                "zeroRecords": "Nenhum registro encontrado",
                "info": "Pagina  _PAGE_ de _PAGES_",
                "infoEmpty": "Nenhum registro encontrado",
                "infoFiltered": "(Filtrados de _MAX_ registros)",
                "search": "Pesquisar",
                "paginate": {
                    "next": "Próximo",
                    "previous": "Anterior",
                    "first": "Primeiro",
                    "last": "Último"
                },

            }
        });

        $('#example').DataTable();

        this.setupEventListeners();
    }

    setupEventListeners() {
        document.querySelector('.btn.btn-primaria').addEventListener('click', () => {
            document.getElementById('conteudo').classList.remove('d-none');
            this.preencherTabela();
        });
    }

    preencherTabela() {
        // const button = `<button type="button" class="btn btn-primaria">Imprimir</button>`;
        const cabecalho = `
            <tr>
                <th>Turma</th>
                <th>Vagas UERJ</th>
                <th>Vagas Vestibular</th>
                <th>Vagas ADI</th>
                <th>Alunos Inscritos</th>
            </tr>
        `;
        
        const corpo = `
            <tr>
                <td>00-10820 Algoritmos e Estruturas de Dados I</td>
                <td>1</td>
                <td>42</td>
                <td>0</td>
                <td>0</td>
                <td>42</td>
            </tr>

            <tr>
                <td>00-10820 Algoritmos e Estruturas de Dados I</td>
                <td>2</td>
                <td>40</td>
                <td>0</td>
                <td>0</td>
                <td>38</td>
            </tr>

            <tr>
                <td>00-10823 Algoritmos e Estruturas de Dados II</td>
                <td>1</td>
                <td>46</td>
                <td>0</td>
                <td>0</td>
                <td>46</td>
            </tr>
            <tr>
                <td>00-11311 Algoritmos em Grafos</td>
                <td>1</td>
                <td>50</td>
                <td>0</td>
                <td>0</td>
                <td>43</td>
            </tr>
        `;

        // document.getElementById('hiddenbutton').innerHTML = button;
        document.getElementById('tabela-cabecalho').innerHTML = cabecalho;
        document.getElementById('tabela-corpo').innerHTML = corpo;
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

window.view = new VagasOferecidasPorTurmas();