import {Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {DatasetsService} from '../../_services/datasets.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'codemirror/mode/sql/sql';
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/sql-hint";
import "codemirror/addon/runmode/runmode";
@Component({
    selector: 'app-datasets',
    templateUrl: './datasets_list.component.html',
    styleUrls: ['./datasets_list.component.css']
})
export class DatasetsListComponent implements OnInit {
    connection_id: any;

    datasets: any = [];
    db_name: any;
    reorderable: any;
    loadingIndicator: any;
    columns: any;
    sql: any;
    table_name: string;
    codemirror_config: any = {
        mode: 'text/x-sql',
        indentWithTabs: true,
        smartIndent: true,
        lineNumbers: true,
        matchBrackets: true,
        autocomplete: function () {
            return 'test';
        },
        autofocus: true,
        extraKeys: {"Ctrl-Space": "autocomplete"}
    };
    @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;
    @ViewChild('tableNameTmpl') tableNameTmpl: TemplateRef<any>;
    constructor(
        private datasetsservice: DatasetsService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.db_name = params.get('db_name');
            this.connection_id = params.get('connection');

        });
        //Fix for Same component OnInit
        this.route.params.subscribe(params => {
            this.getTables(this.connection_id, this.db_name);
        });

    }

    getTables(connection_id, table) {
        this.columns = [
            {prop: 'name', name: 'Table Name', cellTemplate: this.tableNameTmpl, flexGrow: 60},
            {prop: 'table_type', name: 'Table Type'},
            {prop: 'engine', name: 'Engine'},
            {prop: 'table_rows', name: 'Table Rows'},
            {prop: 'create_time', name: 'Create Time'},
            {name: 'Action', cellTemplate: this.actionTmpl, prop: 'table_name', sortable: false},
        ];

        this.datasetsservice.getTables(connection_id, table).subscribe(result => {
            this.datasets = result;
        });

    }


    excuteQuery() {
        this.datasetsservice.excuteQuery(this.connection_id, this.db_name, this.sql).subscribe(result => {
            var result = result;
        });
    }
}
