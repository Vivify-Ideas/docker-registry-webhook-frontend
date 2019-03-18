import { BaseService } from './../../../services/base.service';
import { USER_TOKEN_KEY, USER_KEY } from '../../../../constants';

interface ILoginResponse {
  token: string;
  user: User;
};

interface IRegisterData {
  email: string;
  password: string;
  projects: Array<String>;
}

const ENDPOINTS = {
  LOGIN: '/auth/login',
  USER: '/user',
  AUTH_ME: '/auth/me'
};

class AuthService extends BaseService {
  login(email: string, password: string): Promise<User> {
    return this.http.post<ILoginResponse>(ENDPOINTS.LOGIN, {
      email, password
    }).then(({ data: { user, token } }) => {
      this.setStorageData(token, user);
      return user;
    });
  }

  registerUser(data: IRegisterData): Promise<User> {
    console.log('egister user');
    return this.http.post<User>(ENDPOINTS.USER, data)
      .then(({ data }) => {
        return data;
      })
  }

  authMe(): Promise<User> {
    return this.http.get<User>(ENDPOINTS.AUTH_ME)
      .then(({ data }) => {
        this.setStorageData(
          localStorage.getItem(USER_TOKEN_KEY),
          data
        );
        return data;
      });
  }

  private setStorageData(token: string | null, user: User) {
    if (token) {
      localStorage.setItem(USER_TOKEN_KEY, token);
    }
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}

const service: AuthService = new AuthService();
export default service;

