// const API_ROOT = 'https://kelvin-electric-backend.herokuapp.com/api/v1/';
const API_ROOT = 'http://localhost:8000/api/v1';

export const APIUrls = {
  userSignup: () => `${API_ROOT}/user/sign-up`,
  userLogin: () => `${API_ROOT}/user/sign-in`,
  forgetPassword: () => `${API_ROOT}/user/forgot-password`,
  resetPassword: (userId) => `${API_ROOT}/user/reset-password/${userId}`,
  locateDealerships: () => `${API_ROOT}/product/locate-dealerships`,
  bookTestride: () => `${API_ROOT}/product/testride`,
  createPaymentReciept: () => `${API_ROOT}/product/payment`,
  preorder: () => `${API_ROOT}/product/preorder`,
  fetchPreorders: (userId) => `${API_ROOT}/user/get-preorders/${userId}`,
};
