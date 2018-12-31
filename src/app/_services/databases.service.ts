import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

import {ApiService} from '../_services/api.service';
import {AuthenticationService} from '../_services/authentication.service';


@Injectable()
export class DatabasesService {

    constructor(
        private http: ApiService,
        private authenticationservice: AuthenticationService,
    ) {
    }

    getDatabases(connection_id) {
        return this.http.post(ApiService.geturl('databases', 'list'), {connection_id: connection_id});

    }
    createDatabase(database_name: any) {
        return this.http.post(ApiService.geturl('databases', 'create'), {database_name: database_name});
    }

}