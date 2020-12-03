import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlaystation, faXbox, faTwitter, faFacebook, faInstagram, faCcVisa, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper, faSearch, faCalendar, faCalendarAlt, faUsers, faUser, faShippingFast, faWindowClose, faTimes, faTimesCircle, faAddressBook, faComment, faCommentAlt, faComments, faShoppingCart, faMoneyBillWave, faBars, faCaretDown, faCaretRight, faCaretLeft, faCaretUp, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidenavComponent } from './left-sidenav/left-sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesNewsComponent } from './articles-news/articles-news.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { SalesComponent } from './sales/sales.component';
import { PlaystationComponent } from './playstation/playstation.component';
import { XboxComponent } from './xbox/xbox.component';
import { NintendoComponent } from './nintendo/nintendo.component';
import { MerchandisingComponent } from './merchandising/merchandising.component';
import { AccesoriesComponent } from './accesories/accesories.component';
import { InformationComponent } from './information/information.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LeftSidenavComponent,
    FooterComponent,
    ArticlesNewsComponent,
    CalendarComponent,
    ShoppingCartComponent,
    NewReleasesComponent,
    ComingsoonComponent,
    SalesComponent,
    PlaystationComponent,
    XboxComponent,
    NintendoComponent,
    MerchandisingComponent,
    AccesoriesComponent,
    InformationComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
      library.addIcons(faAddressBook, faCalendar, faCalendarAlt, faCcMastercard, faCcPaypal, faCcVisa, faComment,
        faCommentAlt, faComments, faFacebook, faInstagram, faMoneyBillWave, faNewspaper, faPlaystation, faSearch,
        faShippingFast, faShoppingCart, faTimes, faTimesCircle, faTwitter, faUsers, faWindowClose, faXbox, faCaretUp,
        faCaretRight, faCaretLeft, faCaretDown, faBars, faUser, faArrowAltCircleLeft);
    }
}
