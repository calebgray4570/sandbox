export interface IAuthUser {
    address1: string;
    address2: string;
    alias: string;
    avatar: any;
    city: string;
    created_at: string;
    dob: string;
    email: string;
    first_name: string;
    following_companies: any;
    following_postings: any;
    is_active: boolean;
    is_admin: boolean;
    is_superuser: boolean;
    json_resume: string;
    last_login: string;
    last_name: string;
    middle_name: string;
    personal_phone: string;
    private_profiles: Array<string>;
    resumes: Array<string>;
    state: string;
    suffix: string;
    updated_at: string;
    url: string;
    user_permissions: Array<any>;
    uuid: string;
    zip_code: string;
}

export class AuthUser {
    address1: string;
    address2: string;
    alias: string;
    avatar: any
    city: string;
    created_at: string;
    dob: string;
    email: string;
    first_name: string;
    following_companies: any;
    following_postings: any;
    is_active: boolean;
    is_admin: boolean;
    is_superuser: boolean;
    json_resume: string;
    last_login: string;
    last_name: string;
    middle_name: string;
    personal_phone: string;
    private_profiles: Array<string>;
    resumes: Array<string>;
    state: string;
    suffix: string;
    updated_at: string;
    url: string;
    user_permissions: Array<any>;
    uuid: string;
    zip_code: string;

    constructor(obj: IAuthUser) {
        this.address1 = obj.address1 || '';
        this.address2 = obj.address2 || '';
        this.alias = obj.alias || '';
        this.avatar = obj.avatar || '';
        this.city = obj.city || '';
        this.created_at = obj.created_at || '';
        this.dob = obj.dob || '';
        this.email = obj.email || '';
        this.first_name = obj.first_name || '';
        this.following_companies = new Set(obj.following_companies) || new Set();
        this.following_postings = new Set(obj.following_postings) || new Set();
        this.is_active = obj.is_active || false;
        this.is_admin = obj.is_admin || false;
        this.is_superuser = obj.is_superuser || false;
        this.json_resume = obj.json_resume || '';
        this.last_login = obj.last_login  || '';
        this.last_name = obj.last_name || '';
        this.middle_name = obj.middle_name || '';
        this.personal_phone = obj.personal_phone || '';
        this.private_profiles = obj.private_profiles || [];
        this.resumes = obj.resumes || [];
        this.state = obj.state || '';
        this.suffix = obj.suffix || '';
        this.updated_at = obj.updated_at || '';
        this.url = obj.url || '';
        this.user_permissions = obj.user_permissions || [];
        this.uuid = obj.uuid || '';
        this.zip_code = obj.zip_code || '';
    }
}