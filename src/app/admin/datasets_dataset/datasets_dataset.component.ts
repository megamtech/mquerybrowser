import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FieldsService} from "../../_services/fields.service";
import {DatasetsService} from "../../_services/datasets.service";

@Component({
    selector: 'app-datasets_dataset',
    templateUrl: './datasets_dataset.component.html',
    styleUrls: ['./datasets_dataset.component.css']
})
export class DatasetsDatasetComponent implements OnInit {
    datasetdata: any;
    connection_type: any;
    fields: any = [];

    columns: any = [];

    connection_id: any;
    db_name: any;
    dataset: any;
    public dataset_data: any;
    breadcrumbs: any = [];
    public list = [
        {
            title: 'childless',
            children: []
        },
        {
            title: 'great grandparent',
            children: [
                {
                    title: 'childless grandsibiling',
                    children: []
                },
                {
                    title: 'grandparent',
                    children: [
                        {
                            title: 'childless sibiling',
                            children: []
                        },
                        {
                            title: 'another childless sibiling',
                            children: []
                        },
                        {
                            title: 'parent',
                            children: [
                                {
                                    title: 'child',
                                    children: []
                                },
                                {
                                    title: 'another child',
                                    children: []
                                },
                            ]
                        },
                        {
                            title: 'another parent',
                            children: [
                                {
                                    title: 'child',
                                    children: []
                                },
                            ]
                        },
                    ]
                },
                {
                    title: 'another grandparent',
                    children: [
                        {
                            title: 'parent',
                            children: [
                                {
                                    title: 'child',
                                    children: []
                                },
                                {
                                    title: 'another child',
                                    children: []
                                },
                                {
                                    title: 'a third child',
                                    children: []
                                },
                                {
                                    title: 'teen mother',
                                    children: [
                                        {
                                            title: 'accident',
                                            children: []
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },
    ];
    @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;
    constructor(private fieldsservice: FieldsService, private datasetservice: DatasetsService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.connection_id = params.get('connection');
            this.db_name = params.get('db_name');
            this.dataset = params.get('table_name');
            this.getDatasetData();
        });
        //        this.route.params.subscribe((param) => {
        //            this.breadcrumbs.push({'type': 'home', name: 'Home'})
        //            this.breadcrumbs.push({'type': 'database', db_name: this.db_name, name: this.db_name})
        //            this.breadcrumbs.push({'type': 'dataset', db_name: this.db_name, table: this.dataset, name: this.dataset})
        //            //            this.breadcrumbs.push({'type': '', name: 'Fields'})
        //        });
        //        this.getFields();

    }

    getDatasetData() {


        this.datasetservice.getData(this.connection_id, this.db_name, this.dataset).subscribe((data) => {
            this.connection_type = data['response']['connection_type'];
            this.datasetdata = data['response']['dataset'];
            console.log(this.datasetdata);
        });
    }
    getFields() {

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
        ];
        this.fieldsservice.getFields(this.connection_id, this.db_name, this.dataset).subscribe(result => {
            this.fields = result;
        });
    }
    initTabContent(id) {
        console.log(id + 'asdasd');
    }

}
