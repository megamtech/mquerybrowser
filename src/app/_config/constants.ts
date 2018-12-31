/*
 * Copyright (c) 2017 Megam Technologies LLP
 * For License details, Please visit http://license.megamtech.com
 * If you need any support please mail us to itsupport@megamtech.com
 */

import { Injectable } from '@angular/core';
@Injectable()
export class ConstantService {
    //    public static BASE_URL = 'http://wms.atozglobalservices.com/wmsapi';
    public static BASE_URL = 'http://127.0.0.1/mquery/server';
    public static API_URL = {

        'user': {
            'login': 'login',
            'getuserlist': 'getuserlist',
            'updateuser': 'updateuser',
            'suspenduser': 'suspenduser',
            'adduser': 'adduser',
            'deleteuser': 'deleteuser',
            'getclientusers': 'getclientusers',
            'viewuser': 'viewuser',
            'update_client_id': 'update_client_id'
        },
        'databases': {
            'list': 'databases/list',
            'create': 'databases/create'
        },
        'datasets': {
            'list': 'datasets/list',
            'data': 'datasets/data',
            'query': 'datasets/query',
            'create': 'datasets/create'
        },
        'fields': {
            'list': 'fields/list'
        },
        'connection': {
            'list': 'connection/list'
        },
        'server': {
            'details': 'server/details',
            'status': 'server/status',
            'processes': 'server/processes',
            'qstats': 'server/qstats',
        }
    };




    constructor() {
    }
}