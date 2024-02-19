import { LOGIN_ENDPOINT } from './constants/endpoint';
import { CallAPI } from '../../../services/callAPI';

export const loginService = (data) => CallAPI(`${LOGIN_ENDPOINT}`, 'post', data);