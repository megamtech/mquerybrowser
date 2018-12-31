import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class ServerService {

    constructor(
        private http: ApiService,
        private authenticationservice: AuthenticationService) {}

    getServerDetails(connection_id: number) {
        return this.http.post(ApiService.geturl('server', 'details'), {connection_id: connection_id});
    }
    getServerStatus(connection_id: number) {
        return this.http.post(ApiService.geturl('server', 'status'), {connection_id: connection_id});
    }
    getServerProcesses(connection_id: number) {
        return this.http.post(ApiService.geturl('server', 'processes'), {connection_id: connection_id});
    }
    getServerQueryStats(connection_id: number) {
        return this.http.post(ApiService.geturl('server', 'qstats'), {connection_id: connection_id});
    }
}
