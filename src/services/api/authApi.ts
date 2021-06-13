import {LoginFormProps} from "../../components/modal/SingInPopup";
import {axios} from "../../core/axios";
import {RegPopupProps} from "../../components/modal/RegPopup";

interface ResponseApi {
    status: string;
    data: any;
}

export const AuthApi = {
  async activate(hash: string): Promise<ResponseApi> {
    const {data} = await axios.get<ResponseApi>('/auth/verify?hash' + hash);
    return data;
  },
  async signIn(postData: LoginFormProps): Promise<ResponseApi> {
    const {data} = await axios.post<ResponseApi>('/auth/login', {
      username: postData.email,
      password: postData.password
    });
    return data;
  },
  async signUp(postData: RegPopupProps): Promise<ResponseApi> {
    const {data} = await axios.post<ResponseApi>('/auth/register',
      {
        email: postData.email,
        username: postData.username,
        fullName: postData.fullName,
        password: postData.password,
        password2: postData.password2,
      });
    return data;
  },
  async getMe(): Promise<ResponseApi> {
    const {data} = await axios.get<ResponseApi>('/users/me');
    return data;
  }
}
