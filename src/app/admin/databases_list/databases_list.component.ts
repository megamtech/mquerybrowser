import {Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {DatabasesService} from '../../_services/databases.service';
import swal from 'sweetalert2';

@Component({
    selector: 'app-list',
    templateUrl: './databases_list.component.html',
    styleUrls: ['./databases_list.component.css']
})
export class DatabaseListComponent implements OnInit {
    databases_columns: any = [];
    databases: any = [];
    reorderable: any;
    loadingIndicator: any;
    database_name: any;
    connection_id: any;

    @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;
    constructor(
        private databaseservice: DatabasesService
    ) {}

    ngOnInit() {
        this.getDatabases();
    }
    getDatabases() {
        this.databases_columns = [
            {prop: "schema_name", name: 'Name'},
            {prop: "default_character_set_name", name: 'Default Charcter Set'},
            {prop: "schema_name", name: 'Action', cellTemplate: this.actionTmpl, sortable: false}
        ];
        this.databaseservice.getDatabases(this.connection_id).subscribe(result => {
            this.databases = result;
        });
    }

    createDatabase() {
        this.databaseservice.createDatabase(this.database_name).subscribe(result => {
            if (result['status_code'] == 1) {
                swal('Success', 'Database Created Successfully', 'success');
            }
        });
    }

}
