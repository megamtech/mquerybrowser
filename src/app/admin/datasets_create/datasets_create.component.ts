import {Component, OnInit} from '@angular/core';
import {DatasetsService} from '../../_services/datasets.service'
@Component({
    selector: 'app-datasets-create',
    templateUrl: './datasets_create.component.html',
    styleUrls: ['./datasets_create.component.css']
})
export class DatasetsCreateComponent implements OnInit {
    table_name: string;


    index_array: any = [
        {"display_name": "PRIMARY", value: "primary"},
        {"display_name": "UNIQUE", value: "unique"},
        {"display_name": "INDEX", value: "index"},
        {"display_name": "FULLTEXT", value: "fulltext"},
        {"display_name": "SPATIAL", value: "spatial"}
    ];

    data_types: any = [
        {
            display_name: "INT",
            value: "integer"
        },
        {
            display_name: "VARCHAR",
            value: "varchar"
        },
        {
            display_name: "TEXT",
            value: "string"
        },
        {
            display_name: "DATE",
            value: "date"
        },
        {
            display_name: "BOOLEAN",
            value: "boolean"
        },
        {
            display_name: "TIMESTAMP",
            value: "timestamp"
        }
    ];
    default: any = [
        {
            display_name: "",
            value: ""
        },
        {
            display_name: "",
            value: ""
        },
    ];

    table_data: any = [{
        name: "",
        type: "",
        length: 255,
        default: "",
        default_defined_value: "",
        comment: "",
        null: false,
        index: "",
        auto_increament: false
    }];

    constructor(
        private datasetsservice: DatasetsService
    ) {}

    ngOnInit() {
        console.log('UU=> ' + JSON.stringify(this.data_types));
    }
    addRow() {

        this.table_data.push({
            name: "",
            type: "",
            length: 255,
            default: "",
            default_defined_value: "",
            comment: "",
            null: "",
            index: "",
            auto_increament: ""
        }
        );
    }
    deleteRow(index) {
        this.table_data.splice(index, 1);
    }
    createTable() {
        this.datasetsservice.createTable(this.table_data, this.table_name).subscribe(result => {
            if (result['status_code'] == 1) {
            }
        });
    }

}
