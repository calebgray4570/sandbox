import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActiveApplications } from '../types/active-applications';
import { tap } from 'rxjs/operators';


@Injectable()
export class UsersService {
  profileUrl = '/public_profiles/';
  applicationUrl = '/applications_public/';
  jsonResumeUrl = '/json_resumes/';

  constructor(
    private apiService: ApiService,
  ) {}

  getUser(uuid) {
    return this.apiService.get(this.profileUrl + uuid + '/')
  }

  updateUser(uuid, userBody) {
    return this.apiService.patch(this.profileUrl + uuid + '/', userBody)
  }

  getApplications() {
    return this.apiService.get(this.applicationUrl)
  }
  
  getAllActiveApplications(userID: string) {
    return this.apiService.get('/applications/?applicant_id=' + userID )
  }

  getResume(uuid) {
    return this.apiService.get(this.profileUrl + uuid + '/?expand=json_resume')
  }

  updateResume(url, userBody) {
    return this.apiService.patch(url, userBody)
  }

  getJsonResume(id) {
    return this.apiService.get(this.jsonResumeUrl + id + '/')
  }

  registerUser(profileBody) {
    return this.apiService.post(this.profileUrl, profileBody)
  }

  confirmUser(token: string) {
    return this.apiService.post('/auth/activate_email/confirm/' + token + '/', {})
  }

  uploadAvatar( uuid, fileToUpload: File) {
    const formData = new FormData();
    formData.append('avatar', fileToUpload, fileToUpload.name)
    return this.apiService.patch(this.profileUrl + uuid + '/', formData)
  }

}
