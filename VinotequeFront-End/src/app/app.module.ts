import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './Components/main-nav/main-nav.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//AngularMaterials
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { WineCardComponent } from './Components/wine-card/wine-card.component';
import { ReviewCardComponent } from './Components/review-card/review-card.component';
import {MatMenuModule} from '@angular/material/menu';
import { ShopPageComponent } from './Components/Shop/shop-page/shop-page.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { AuthenticationService } from './Services/authentication.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { ItemCartComponent } from './Components/item-cart/item-cart.component';
import {MatRadioModule} from '@angular/material/radio';
import { UserPageComponent } from './Components/user-page/user-page.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { WinePageComponent } from './Components/wine-page/wine-page.component';
import { RedPageComponent } from './Components/Shop/red-page/red-page.component';
import { WhitePageComponent } from './Components/Shop/white-page/white-page.component';
import { RosePageComponent } from './Components/Shop/rose-page/rose-page.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import {matStepperAnimations, MatStepperModule} from '@angular/material/stepper';
import { RequestCardComponent } from './Components/request-card/request-card.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSliderModule} from '@angular/material/slider';
import { NgxPayPalModule } from 'ngx-paypal';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    WineCardComponent,
    ReviewCardComponent,
    ShopPageComponent,
    UserPageComponent,
    ItemCartComponent,
    CartPageComponent,
    WinePageComponent,
    RedPageComponent,
    WhitePageComponent,
    RosePageComponent,
    HomePageComponent,
    RequestCardComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    HttpClientModule,
    MatRadioModule,
    MatSnackBarModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatSliderModule,
    NgxPayPalModule,
    MatProgressSpinnerModule,
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
