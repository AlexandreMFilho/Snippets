import { BaseView } from "./base/BaseView.js";

export class TabelaView extends BaseView{
    constructor() {
        super();
        this.tbody = document.querySelector('tbody');
        //this.pagination = document.querySelector('.pagination');
        console.log(this.tbody);
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

        this.carregaTreeview();

    }

    obterDados(){
        this.transporte.obter("/obterTabela")
          .then((obj)=>this.preencher(obj));
    }

    preencher(obj){
        //return;
        console.log(obj);
        this.tbody.innerHTML = "";
        for (let i in obj){
            this.tbody.innerHTML += `
                            <tr>
                            <td class="acoes">    
                            <i class="bi bi-folder2-open"></i>
                            <i class="bi bi-trash-fill"></i>
                            <i class="bi bi-bootstrap-reboot"></i>
                            </td>
                            <td>${obj[i].nome}</td>
                            <td>${obj[i].matricula}</td>
                            <td>${obj[i].ativo} </td>               

                            </tr>
            `;
        }

    }

    carregaTreeview(){
        $(function () {

			var json = [
				{
					text: "Inbox",
					icon: "fa fa-inbox fa-fw",
					nodes: [
						{
							text: "Office",
							icon: "fa fa-inbox fa-fw",
							nodes: [
								{
									icon: "fa fa-inbox fa-fw",
									text: "Customers"
								},
								{
									icon: "fa fa-inbox fa-fw",
									text: "Co-Workers"
								}
							]
						},
						{
							icon: "fa fa-inbox fa-fw",
							text: "Others"
						}
					]
				},
				{
					icon: "fa fa-archive fa-fw",
					text: "Drafts"
				}
			];

			$('#tree').bstreeview({
				data: json,
                expandIcon: 'fa fa-angle-down fa-fw',
                collapseIcon: 'fa fa-angle-right fa-fw',
                indent: 1.25,
                parentsMarginLeft: '1.25rem',
                openNodeLinkOnNewTab: true
			});
		});
    }


}

window.view = new TabelaView();