import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

import {ApiService} from '../_services/api.service';
import {AuthenticationService} from '../_services/authentication.service';


@Injectable()
export class FieldsService {

    constructor(
        private http: ApiService,
        private authenticationservice: AuthenticationService,
    ) {
    }

    getFields(connection_id: any, db_name: any, table: any) {
        return this.http.post(ApiService.geturl('fields', 'list'), {connection_id: connection_id, database: db_name, dataset: table});
    }
}