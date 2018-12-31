import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

import {ApiService} from '../_services/api.service';
import {AuthenticationService} from '../_services/authentication.service';


@Injectable()
export class DatasetsService {

    constructor(
        private http: ApiService,
        private authenticationservice: AuthenticationService,
    ) {
    }


    getTables(connection_id: any, database: string) {
        return this.http.post(ApiService.geturl('datasets', 'list'), {connection_id: connection_id, database: database});

    }

    getData(connection_id: number, database: string, dataset: string) {
        return this.http.post(ApiService.geturl('datasets', 'data'), {connection_id: connection_id, database: database, dataset: dataset})

    }

    excuteQuery(connection_id, db_name, query) {
        return this.http.post(ApiService.geturl('datasets', 'query'), {connection_id: connection_id, database: db_name, query: query})
            .map((response) => {
                return response;
            });
    }

    createTable(table_data, table_name) {
        return this.http.post(ApiService.geturl('datasets', 'create'), {table_data: table_data, table_name: table_name})
            .map((response) => {
                return response;
            });
    }

}