import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ServerService} from "../../_services/server.service";
@Component({
    selector: 'app-server-dashboard',
    templateUrl: './server_dashboard.component.html',
    styleUrls: ['./server_dashboard.component.css']
})
export class ServerDashboardComponent implements OnInit {
    image: any;
    qstats_cols: any[];
    processes_cols: any[];

    statuses: any = [];
    processes: any = [];
    qstats: any = [];
    connection_id: any;
    status_cols: any = [];

    server_data: any = {
        'mysql': {
            'img': 'assets/img/mysql_logo.png',
            'display_name': "My SQL"
        },
        'nginx': {
            'img': 'assets/img/nginx_logo.png',
            'display_name': 'Nginix'
        },
        'PHP': {
            'img': 'assets/img/php_logo.png',
            'display_name': 'PHP'
        },
        'apache': {
            'img': 'assets/img/apache_logo.png',
            'display_name': 'Apache'
        },
        'mongodb': {
            'img': 'assets/img/mongodb_logo.jpg',
            'display_name': 'Mongo DB'
        }
    };

    constructor(private server: ServerService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.connection_id = params.get('connection');
            this.getServerStatus();
            this.getServerProcesses();
            this.getQueryStats();
        });
    }

    getServerStatus() {
        this.server.getServerStatus(this.connection_id).subscribe((data) => {
            this.statuses = data['response'];
            this.getImage();
            //            var t = [];
            //            Object.keys(this.statuses[0]).forEach(function (value) {
            //                t.push({prop: value, name: value});
            //            });
            //            this.status_cols = t;
        });
    }

    getImage() {
        if (this.statuses.status.db != null) {
            this.statuses.status.db.img = this.server_data[this.statuses.status.db.server_type]['img'];
        }
        if (this.statuses.status.webserver != null) {
            this.statuses.status.webserver.img = this.server_data[this.statuses.status.webserver.type]['img'];
        }
        if (this.statuses.status.scripting != null) {
            this.statuses.status.scripting.img = this.server_data[this.statuses.status.scripting.type]['img'];
        }

    }

    getServerDetails() {
        this.server.getServerProcesses(this.connection_id).subscribe((data) => {
            this.processes = data['response'];
            //            var t = [];
            //            Object.keys(this.processes[0]).forEach(function (value) {
            //                t.push({prop: value, name: value});
            //            });
            //            this.processes_cols = t;
        });
    }
    getServerProcesses() {
        this.server.getServerProcesses(this.connection_id).subscribe((data) => {
            this.processes = data['response'];
            var t = [];
            Object.keys(this.processes[0]).forEach(function (value) {
                t.push({prop: value, name: value});
            });
            this.processes_cols = t;
        });
    }
    getQueryStats() {
        this.server.getServerQueryStats(this.connection_id).subscribe((data) => {
            this.qstats = data['response'];
            var t = [];
            Object.keys(this.qstats[0]).forEach(function (value) {
                t.push({prop: value, name: value});
            });
            this.qstats_cols = t;
        });
    }
}
