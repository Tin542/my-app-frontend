import { notification } from 'antd';

export const loginSuccess = (msg) => {
  notification.success({
    message: 'Login Success',
    description: `Đăng nhập thành công`
  });
};
export const loginFail = (msg) => {
  notification.error({
    message: 'Login Failed',
    description: `${msg}`
  });
};