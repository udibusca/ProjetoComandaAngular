import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'pedido', title: 'Pedido',  icon: 'ti-panel', class: '' }
    //{ path: 'table', title: 'Table List',  icon:'ti-view-list-alt', class: '' },
    //{ path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
    //{ path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
    //{ path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
    //{ path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
    //{ path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

export const SUBROUTES: RouteInfo[] = [
    { path: 'usuario', title: 'Usuários',  icon:'ti-user', class: '' },
    { path: 'categoria', title: 'Categorias',  icon:'ti-book', class: '' },
    { path: 'adicional', title: 'Adicionais',  icon:'ti-view-list-alt', class: '' },
    { path: 'mesa', title: 'Mesa',  icon:'ti-bookmark-alt', class: '' },
    { path: 'produto', title: 'Produtos',  icon:'ti-notepad', class: '' },
    { path: 'hero-form', title: 'Forms',  icon: 'ti-panel', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public subMenusItens: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.subMenusItens = SUBROUTES.filter(subMenusIten => subMenusIten);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
