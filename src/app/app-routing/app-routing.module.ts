import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DatabaseListComponent} from '../admin/databases_list/databases_list.component';
import {DatasetsListComponent} from '../admin/datasets_list/datasets_list.component';
import {FieldsComponent} from '../admin/fields/fields.component';
import {DatasetsDataComponent} from '../admin/datasets_data/datasets_data.component';
import {DatasetsDatasetComponent} from '../admin/datasets_dataset/datasets_dataset.component';
import {DatasetsCreateComponent} from '../admin/datasets_create/datasets_create.component';
import {ServerDashboardComponent} from '../admin/server_dashboard/server_dashboard.component';
//import {ConnectionCreateComponent} from '../admin/connection_create/connection_create.component';
//import {ConnectionListComponent} from '../admin/connection_list/connection_list.component';
const routes: Routes = [
    {
        path: 'dashboard/:connection',
        component: ServerDashboardComponent,
    },
    {
        path: 'databases/:connection',
        component: DatabaseListComponent,
    },
    {
        path: 'datasets/:connection/:db_name',
        component: DatasetsListComponent,
    },
    {
        path: 'dataset/:connection/:db_name/:table_name',
        component: DatasetsDatasetComponent,
    },
    {
        path: 'fields/:connection/:db_name/:table_name',
        component: FieldsComponent,
    },
    {
        path: 'datasets/data/:connection/:db_name/:table_name',
        component: DatasetsDataComponent,
    },
    {
        path: 'dataset/:connection/:db_name/create',
        component: DatasetsCreateComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {}