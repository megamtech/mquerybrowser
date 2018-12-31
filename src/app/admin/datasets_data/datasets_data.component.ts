import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {DatasetsService} from '../../_services/datasets.service';
@Component({
    selector: 'app-datasets',
    templateUrl: './datasets_data.component.html',
    styleUrls: ['./datasets_data.component.css']
})
export class DatasetsDataComponent implements OnInit {

    table_name: any;
    data: any = [];
    keys: any = [];
    constructor(
        private route: ActivatedRoute,
        private datasetsservice: DatasetsService,
    ) {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.table_name = params.get('table_name');

        });
        this.getTableData();
    }

    ngOnInit() {

    }

    getTableData() {
        //        this.datasetsservice.getData(this.table_name).subscribe(result => {
        //            this.data = result['response'];
        //            console.log(Object.keys(this.data[0]));
        //             this.clientListColumns = [
        //            {name: 'Client Name', prop: 'client_name'},
        //            {name: 'Client#', prop: 'ref_client_id'},
        //            {name: 'Company', prop: 'company'},
        //            {name: 'city', prop: 'city'},
        //            {name: 'country', prop: 'country'},
        //            {name: 'postal', prop: 'postal'},
        //            {name: 'Action', cellTemplate: this.actionTmpl, prop: 'muid'},
        //        ];
        //            var columns = [];
        //            Object.keys(this.data[0]).forEach(function (value, key) {
        //                columns.push({prop: value});
        //            });
        //            columns.push({name: 'Action', prop: 'muid'});

        //            this.keys = columns;
        //        });
    }
}
