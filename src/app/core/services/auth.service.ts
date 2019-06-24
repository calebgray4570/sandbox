import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

import { StartUpService } from './startup.service';
import { AuthUser } from '../types/auth-user';


@Injectable()
export class AuthService {
    
    private currentUserSubject = new BehaviorSubject<AuthUser>(null);

    get getCurrentUser() {
        return this.currentUserSubject.asObservable();
    }
    set setCurrentUser(currentUser: AuthUser) {
        this.currentUserSubject.next(currentUser);
    }

    constructor(
        private startUpService: StartUpService,
        private apiService: ApiService,
    ) {}

    login(userObj) {
        return this.apiService.post('/auth/login/', userObj)
            .pipe(
                tap((res) => this.setAuth(res))
            )
    }

    logout() {
        let userObj = {'uuid': this.currentUserSubject.value['uuid']}
        return this.apiService.post('/auth/logout/', userObj)
            .pipe(tap(() => {
                this.clearAuth();
            }))
    }
    
    setAuth(res?: any) {
        // Check if its from refresh:
        if (this.startUpService.startupData) res = this.startUpService.startupData;

        if (res) {
            // let p = res['public_profile'];            
            let p = res['private_profile'];            
            this.setCurrentUser = new AuthUser(p);
            localStorage.removeItem('token');
            localStorage.setItem('token', res['token']);
            // this.getFollowings(p);
        }
    }

    clearAuth() {
        localStorage.removeItem('token');
        this.setCurrentUser = null;
    }

    startPasswordReset(emailObj) {
        return this.apiService.post('/auth/password_reset/', emailObj);
    }

    changePassword(token, passwordObj) {
        return this.apiService.post('/auth/password_reset/confirm/' + token + '/', passwordObj);
    }

    // getFollowings(profile) {
    //     let followingObj = {
    //         user: profile.uuid,
    //         follow_type: "posting"
    //     }
    //     let followingArr = []
    //     this.apiService.post('/public_profiles/following/', followingObj)
    //         .toPromise()
    //         .then((res) => {
    //             res.job_posting.forEach(element => {
    //                 followingArr.push(element.uuid)
    //             });
    //             profile.following_postings = followingArr
    //             this.currentUserSubject.value.following_postings = new Set(profile.following_postings)
    //         })   
    // }

}

