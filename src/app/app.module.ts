import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


// stuff from 3rd party

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import { MyMaterialModule } from  './material.module';
// stuff we created

import { HomeComponent } from './home/home.component';
import { ArmiesComponent } from './armies/armies.component';
import { DetachmentsComponent } from './detachments/detachments.component';
import { AbilitiesModule } from './abilities/abilities.module';
import { FactionsModule } from './factions/factions.module';
import { UnitsModule } from './list-items/units/units.module';

/**
 * NgModule that includes all Material modules that are required.
 */
@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
    MyMaterialModule
  ],
  declarations: [DetachmentsComponent]
})
export class MaterialModule {}



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArmiesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    ToastModule.forRoot(),
    MaterialModule,
    HttpClientModule,
    HttpModule,
    AbilitiesModule,
    FactionsModule,
    UnitsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
