import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule, RequestOptions, JsonpModule } from '@angular/http';

import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { RouterModule, Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TreeModule } from 'angular-tree-component';
import { AngularSplitModule } from 'angular-split';
import { NgxJsonViewerModule } from 'ngx-json-viewer'
//import {MDBBootstrapModule} from 'mdbootstrap';
// import { FyAngularJsonViewerModule } from '@gofynd/angular-json-viewer';
import { CodemirrorModule } from 'ng2-codemirror';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../app/_services/api.service';
import { AuthenticationService } from '../app/_services/authentication.service';
import { ServerService } from '../app/_services/server.service';
import { DatabasesService } from '../app/_services/databases.service';
import { DatasetsService } from '../app/_services/datasets.service';
import { FieldsService } from '../app/_services/fields.service';
import { ConnectionService } from '../app/_services/connection.service';

//Manually Created Component
import { DatasetsListComponent } from '../app/admin/datasets_list/datasets_list.component';
import { FieldsComponent } from '../app/admin/fields/fields.component';
import { DatabaseListComponent } from '../app/admin/databases_list/databases_list.component';
import { DatasetsDataComponent } from './admin/datasets_data/datasets_data.component';
import { DatasetsDatasetComponent } from './admin/datasets_dataset/datasets_dataset.component';
import { DatasetsCreateComponent } from './admin/datasets_create/datasets_create.component';
import { ServerDashboardComponent } from './admin/server_dashboard/server_dashboard.component';
//import { TableContainerComponent } from './table-container/table-container.component';
@NgModule({
    declarations: [
        AppComponent,

        DatabaseListComponent,
        DatasetsListComponent,
        FieldsComponent,
        DatasetsDataComponent,
        DatasetsDatasetComponent,
        DatasetsCreateComponent,
        ServerDashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        Ng2UiAuthModule.forRoot({ loginUrl: 'http://127.0.0.1/mqueryapi/login' }),
        RouterModule,
        AppRoutingModule,
        NgxDatatableModule,
        TreeModule,
        NgbModule.forRoot(),
        AngularSplitModule,
        CodemirrorModule,
        // FyAngularJsonViewerModule,
        NgxJsonViewerModule
        //        MDBBootstrapModule.forRoot()
    ],
    providers: [
        DatabasesService,
        ApiService,
        AuthenticationService,
        LocalStorageService,
        DatasetsService,
        FieldsService,
        ConnectionService,
        ServerService
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
