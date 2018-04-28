import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';

import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { UsuarioNovoComponent } from './usuario/usuario-novo/usuario-novo.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaNovoComponent } from './categoria/categoria-nova/categoria-novo.component';
import { AdicionalListarComponent } from './adicional/adicional-listar/adicional-listar.component';
import { AdicionalNovoComponent } from './adicional/adicional-nova/adicional-novo.component';
import { MesaListarComponent } from './mesa/mesa-listar/mesa-listar.component';
import { MesaNovoComponent } from './mesa/mesa-nova/mesa-novo.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { ProdutoNovoComponent } from './produto/produto-nova/produto-novo.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full', },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },    
    {path: 'usuario', component: UsuarioListarComponent},
    {path: 'usuario/novo', component: UsuarioNovoComponent},
    {path: 'usuario/editar/:id', component: UsuarioNovoComponent},
    {path: 'categoria', component: CategoriaListarComponent},
    {path: 'categoria/novo', component: CategoriaNovoComponent},
    {path: 'categoria/editar/:id', component: CategoriaNovoComponent},
    {path: 'adicional', component: AdicionalListarComponent},
    {path: 'adicional/novo', component: AdicionalNovoComponent},
    {path: 'adicional/editar/:id', component: AdicionalNovoComponent},
    {path: 'mesa', component: MesaListarComponent},
    {path: 'mesa/novo', component: MesaNovoComponent},
    {path: 'mesa/editar/:id', component: MesaNovoComponent},
    {path: 'produto', component: ProdutoListarComponent},
    {path: 'produto/novo', component: ProdutoNovoComponent},
    {path: 'produto/editar/:id', component: ProdutoNovoComponent},
    {path: 'hero-form', component: HeroFormComponent}


]
