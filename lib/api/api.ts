//  тут буде запит на бек  https://petlove.b.goit.study/api

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms)); //штучна затримка
// await delay(2000); //штучна затримка - у запит поставити

import axios, { AxiosError } from 'axios';
import {
  Friend,
  LoginRequest,
  News,
  NewsListResponce,
  Notice,
  NoticesListResponce,
  RegisterRequest,
  User,
} from '@/types/api-types';

export type ApiError = AxiosError<{ error: string }>; // можлива помилка запиту

// axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

// axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const nextServer = axios.create({
  baseURL: 'https://petlove.b.goit.study/api',
  // withCredentials: true, // дозволяє axios працювати з cookie
  // знову так не працює - виникає CORS, із-за попередніх помилок та обмежень API
});

export const internalApi = axios.create({
  baseURL: 'http://localhost:3000/api',

  withCredentials: true,
});

// ----------------------------   NEWS

export const fetchNewsServer = async (page: number, keyword: string) => {
  const response = await nextServer.get<NewsListResponce>('/news', {
    params: { page, limit: 6, keyword },
  });
  return response.data;
};

// API не надає можливості отримати одну новину!!!
// export const getOneNews = async (_id: string) => {
//   const res = await axios.get<News>(`/news/${_id}`);
//   return res.data;
// };

// ---------------------------- пошук тварин - NOTICES

//  ---------------- серверна пагінація тут не працює!!!!
//  ---------------- перероблю на клієнтську!!!!!

// export const getNotices = async (page: number) => {
//   const response = await axios.get<NoticesListResponce>('/notices', {
//     params: { page, limit: 6 },
//   });
//   console.log('api', response.data);
//   return response.data;
// };

///////////////////////////
export const getNotices = async (): Promise<Notice[]> => {
  const response = await nextServer.get<NoticesListResponce>('/notices', {
    params: { limit: 100 },
  });
  return response.data.results;
};

export const getSingleNotice = async (id: string, token: string) => {
  const response = await nextServer.get<Notice>(`/notices/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// запит категорій

export const getNoticeCategories = async () => {
  const response = await nextServer.get<string[]>('/notices/categories');

  return response.data;
};

// запит гендер / пол
export const getNoticeSex = async () => {
  const response = await nextServer.get<string[]>('/notices/sex');

  return response.data;
};

// запит за типом
export const getNoticeSpecies = async () => {
  const response = await nextServer.get<string[]>('/notices/species');

  return response.data;
};

// ---------------------------------   FRIENDS

export const getFriends = async () => {
  const response = await nextServer.get<Friend[]>('/friends');
  return response.data;
};

// запит на реєстрацію / login

export const register = async (data: RegisterRequest) => {
  const res = await internalApi.post<User>('/auth/register', data);
  return res.data;
};

export const login = async (data: LoginRequest) => {
  const res = await internalApi.post<User>('/auth/login', data);
  return res.data;
};

// ------------------------   Реалізація перевірки сесії

type CheckSessionRequest = {
  success: boolean;
};

export const checkSession = async () => {
  const res = await internalApi.get<CheckSessionRequest>('/auth/session');
  return res.data.success;
};

// -------------------------------     Отримання об`єкта користувача

export const getMe = async () => {
  const { data } = await internalApi.get<User>('/auth/me');
  return data;
};

// ---------------------------------   logout

export const logout = async (): Promise<void> => {
  await internalApi.post('/auth/logout');
};
