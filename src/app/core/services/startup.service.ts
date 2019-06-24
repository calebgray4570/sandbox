import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();


@Injectable()
export class StartUpService {

    private _startupData: any;

    constructor(
        private apiService: ApiService,
    ) { }

    // This is the method you want to call at bootstrap
    // Important: It should return a Promise
    load(): Promise<any> {  
        this._startupData = null;
        let token = localStorage.getItem('token');
        if (token) {
            if (helper.isTokenExpired(token)) {
                localStorage.removeItem('token');
            } else {
                return this.apiService.post('/auth/refresh_token/', {'token': token})
                .toPromise()
                .then((data: any) => this._startupData = data)
                .catch((err: any) => Promise.resolve());
            }
        }
    }

    get startupData(): any {
        return this._startupData;
    }
}
