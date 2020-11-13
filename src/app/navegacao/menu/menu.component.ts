import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  screenVisible;
  constructor(private primengConfig: PrimeNGConfig) { }

  items: any[];
  ngOnInit() {
    this.items = [
      {
        label: 'Ambientes',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Cadastrar Novo',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/ambiente'],
            escape: false,
          },
          {
            separator: true
          },
          {
            label: 'Lista de Ambientes',
            icon: 'pi pi-fw pi-sitemap',
            routerLink: ['/ambientes']
          }
        ]
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Novo Usuario',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['/usuario']
          },
          {
            separator: true
          },
          {
            label: 'Lista de Usuarios',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/usuarios']
          },
        ]
      },
      {
        label: 'Notificações',
        icon: 'pi pi-fw pi-comments',
        items: [
          {
            label: 'Listar Notificações',
            icon: 'pi pi-fw pi-pencil',
            routerLink: ['/notificacoes']
          },
          {
            separator: true
          },
          {
            label: 'Gestão',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ['/notificacoes']
          }
        ]
      },
      {
        separator: true
      },
      {
        label: 'Sair',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }
}
