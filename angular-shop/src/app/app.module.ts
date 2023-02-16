import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageGestionComponent } from './pages/page-gestion/page-gestion/page-gestion.component';
import { PageHomeComponent } from './pages/page-home/page-home/page-home.component';
import { PageProductDetailComponent } from './pages/page-product-detail/page-product-detail/page-product-detail.component';
import { PageProductsComponent } from './pages/page-product/page-products/page-products.component';
import { StarComponent } from './shared/components/star/star/star.component';
import { GalleryComponent } from './shared/components/gallery/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    PageGestionComponent,
    PageHomeComponent,
    PageProductDetailComponent,
    PageProductsComponent,
    StarComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
