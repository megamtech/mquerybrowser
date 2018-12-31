import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FieldsService} from '../../_services/fields.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-fields',
    templateUrl: './fields.component.html',
    styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {
    columns: {}[];
    fields: any = [];
    connection_id: any;
    db_name: any;
    table_name: any;
    breadcrumbs: any = [];
    @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;
    constructor(
        private fieldsservice: FieldsService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.connection_id = params.get('connection_id');
            this.db_name = params.get('db_name');
            this.table_name = params.get('table_name');
        });
        this.getFields();
        this.route.params.subscribe((param) => {
            this.breadcrumbs.push({'type': 'home', name: 'Home'})
            this.breadcrumbs.push({'type': 'database', db_name: this.db_name, name: this.db_name})
            this.breadcrumbs.push({'type': 'dataset', db_name: this.db_name, table: this.table_name, name: this.table_name})
            this.breadcrumbs.push({'type': '', name: 'Fields'})
        });
    }

    getFields() {
        this.fieldsservice.getFields(this.connection_id, this.db_name, this.table_name).subscribe(result => {
            this.fields = result;
        });
        this.columns = [
            {prop: 'column_name', name: 'Name'},
            {prop: 'column_default', name: 'Default'},
            {prop: 'is_nullable', name: 'Is Null'},
            {prop: 'data_type', name: 'Data Type'},
            {prop: 'character_maximum_length', name: 'Length'},
            {prop: 'column_type', name: 'Type'},
            {prop: 'column_key', name: 'Key'},
            {prop: 'extra', name: 'Extra'},
            {prop: 'column_comment', name: 'Comment'},
            {name: 'Action', cellTemplate: this.actionTmpl, prop: 'column_comment', sortable: false},
        ]
    }
}
