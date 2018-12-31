import {
    Router,
    // import as RouterEvent to avoid confusion with the DOM Event
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,

    ActivatedRoute
} from '@angular/router'
import {NgZone, Component, OnInit, Renderer} from '@angular/core'
import {DatabasesService} from '../app/_services/databases.service';
import {DatasetsService} from '../app/_services/datasets.service';
import {FieldsService} from '../app/_services/fields.service';
import {ITreeOptions} from "angular-tree-component/dist/angular-tree-component";
//import {ITreeOptions} from "angular-tree-component/dist/tree.types";
import {ConnectionService} from "./_services/connection.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loading: boolean = false;
    connection_list: any;
    title = 'app';
    //    treeSettings: Ng2TreeSettings = {
    //        rootIsVisible: false
    //    }
    menu: any = [];
    options: ITreeOptions = {
        getChildren: this.getChildMenuItems.bind(this)
    };

    databases: any;
    connections: any;
    datasets: any;
    fields: any;
    db_name: any;
    constructor(
        private databaseservice: DatabasesService,
        private datasetsservice: DatasetsService,
        private fieldssservice: FieldsService,
        private connectionservice: ConnectionService,
        private router: Router,
        private ngZone: NgZone,
        private renderer: Renderer,
        private aroute: ActivatedRoute) {
        this.menu = [

            {
                name: 'all',
                type: 'root',
                child_type: 'connections',
                icon: 'server',//plug or sitemap
                //                url: '/databases',
                hasChildren: true
            }
        ];
    }
    ngOnInit() {
        //        console.log('TTES');
        this.aroute.params.subscribe(params => {

        })
        //        this.getDatabases();

    }


    ngAfterViewInit() {
        //TODO for Loading screen
        this.router.events
            .subscribe((event) => {

                if (event instanceof NavigationStart) {
                    console.log('Show Loading');
                    //                    this.loading = false;
                }
                else if (
                    event instanceof NavigationEnd ||
                    event instanceof NavigationCancel
                ) {
                    console.log('Stop Loading');
                    //                    this.loading = true;
                }
            });
    }

    updateTreeMenu(data, menu_id) {

    }
    addChildrens(event) {
        console.log(event);
    }
    getChildMenuItems(node) {
        if (node.data.child_type == 'connections') {
            //this.getConnectionList();
            this.connectionservice.getConnectionList().subscribe(result => {
                this.connection_list = result['response']['connections'];
            });
            return new Promise((resolve, reject) => this.connectionservice.getConnectionList().subscribe(result => {
                this.connections = result['response']['connections'];

                this.connections.forEach((value) => {
                    value['name'] = value.display_name + '(' + value.type + ')';
                    value['hasChildren'] = true;
                    value['child_type'] = 'databases';
                    value['type'] = 'connection';
                    value['icon'] = 'database';
                    value['connection_id'] = value.connection_id;
                    value['url'] = '/dashboard/' + value.connection_id;
                    console.log(value)

                });
                resolve(this.connections);
            }));
        }
        else if (node.data.child_type == 'databases') {
            console.log(node.data.connection_id);
            return new Promise((resolve, reject) => this.databaseservice.getDatabases(node.data.connection_id).subscribe(result => {
                this.databases = result;

                this.databases.forEach((value) => {
                    value['name'] = value.name;
                    value['connection_id'] = node.data.connection_id;
                    value['hasChildren'] = true;
                    value['child_type'] = 'datasets';
                    value['type'] = 'db';
                    value['icon'] = 'database';
                    value['url'] = '/datasets/' + node.data.connection_id + '/' + value.name;

                });
                resolve(this.databases);
            }));
        }
        else if (node.data.child_type == 'datasets') {
            return new Promise((resolve, reject) => this.datasetsservice.getTables(node.data.connection_id, node.data.name).subscribe(result => {

                this.datasets = result;

                this.datasets.forEach((value) => {
                    value['name'] = value.name;
                    value['hasChildren'] = false;
                    value['child_type'] = 'fields';
                    value['type'] = 'dataset';
                    value['connection_id'] = node.data.connection_id;
                    value['db_name'] = node.data.name;
                    value['icon'] = 'table';
                    value['url'] = '/dataset/' + node.data.connection_id + '/' + node.data.name + '/' + value.name;
                });
                resolve(this.datasets);
            }));
        }
        else if (node.data.child_type == 'fields') {
            return new Promise((resolve, reject) => this.fieldssservice.getFields(node.data.connection_id, node.data.db_name, node.data.name).subscribe(result => {

                this.datasets = result;

                this.datasets.forEach((value) => {
                    value['name'] = value.column_name;
                    value['hasChildren'] = false;
                    value['type'] = 'field';
                    //                    value['db_name'] = node.data.name;
                });
                console.log(this.menu);
                resolve(this.datasets);
            }));
        }

    }

    getConnectionList() {


    }

}
