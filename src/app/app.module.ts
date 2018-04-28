import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';

// App Comanda
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
import { CategoriaService } from './categoria/categoria.service';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    UsuarioListarComponent,
    UsuarioNovoComponent,
    CategoriaListarComponent,
    CategoriaNovoComponent,
    AdicionalListarComponent,
    AdicionalNovoComponent,
    MesaListarComponent,
    MesaNovoComponent,
    ProdutoListarComponent,
    ProdutoNovoComponent,
    HeroFormComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    FormsModule,
    ReactiveFormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

  ],
  providers: [CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
