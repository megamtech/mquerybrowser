import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

import {ApiService} from '../_services/api.service';

@Injectable()
export class ConnectionService {

    constructor(
        private http: ApiService
    ) {}

    getConnectionList() {
        return this.http.post(ApiService.geturl('connection', 'list'), {});

    }
}
