/*
 * Copyright (c) 2017. Megam Technologies LLP
 * For License details, Please visit http://license.megamtech.com
 * If you need any support please mail us to itsupport@megamtech.com
 */

import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {} from 'ng2-ui-auth';

import {ConstantService} from '../_config/constants';

@Injectable()
export class ApiService {
    data: any;
    result: any;

    constructor(
        public http: HttpClient
    ) {

    }

    static geturl(group, url) {
        var apiurl = ConstantService.API_URL[group][url];
        if (typeof url == 'undefined') {
            return '';
        }
        return ConstantService.BASE_URL + '/' + apiurl;
    }
    get(url) {
        return this.http.get(url);

    }
    post(url, data) {
        this.data = data;
        return this.http.post(url, this.data);
    }
    update() {

    }
    put() {

    }
}