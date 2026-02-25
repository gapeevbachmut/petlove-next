// lib/api/api.ts

import axios, { AxiosError } from 'axios';
import {
  Friend,
  LoginRequest,
  NewsListResponce,
  Notice,
  NoticesListResponce,
  RegisterRequest,
  UpdateUserRequest,
  User,
} from '@/types/api-types';
import { useAuthStore } from '@/stores/zustand/authStore';

export type ApiError = AxiosError<{ error: string }>;

// ------------------------------------
//  BASE CLIENT (без токена)
// ------------------------------------

const publicApi = axios.create({
  baseURL: 'https://petlove.b.goit.study/api',
});

// ------------------------------------
//  AUTH CLIENT (з токеном)
// ------------------------------------

export const apiClient = axios.create({
  baseURL: 'https://petlove.b.goit.study/api',
});

//  додаю Bearer token
apiClient.interceptors.request.use(config => {
  const token = useAuthStore.getState().user?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ------------------------------------
//  NEWS
// ------------------------------------

export const fetchNews = async (page: number, keyword: string) => {
  const response = await publicApi.get<NewsListResponce>('/news', {
    params: { page, limit: 6, keyword },
  });
  return response.data;
};

// ------------------------------------
// NOTICES
// ------------------------------------

export const getNotices = async (): Promise<Notice[]> => {
  const response = await publicApi.get<NoticesListResponce>('/notices', {
    params: { limit: 100 },
  });

  return response.data.results;
};

export const getNoticesByIds = async (ids: string[]): Promise<Notice[]> => {
  const response = await apiClient.get<NoticesListResponce>(`/notices`, {
    params: { limit: 100, ids: ids.join(',') },
  });
  return response.data.results;
};

export const getSingleNotice = async (id: string) => {
  const response = await publicApi.get<Notice>(`/notices/${id}`);
  return response.data;
};

export const getNoticeCategories = async () => {
  const response = await publicApi.get<string[]>('/notices/categories');
  return response.data;
};

export const getNoticeSex = async () => {
  const response = await publicApi.get<string[]>('/notices/sex');
  return response.data;
};

export const getNoticeSpecies = async () => {
  const response = await publicApi.get<string[]>('/notices/species');
  return response.data;
};

// ------------------------------------
//  FRIENDS
// ------------------------------------

export const getFriends = async () => {
  const response = await publicApi.get<Friend[]>('/friends');
  return response.data;
};

// ------------------------------------
//  AUTH
// ------------------------------------

//  REGISTER
export const register = async (data: RegisterRequest) => {
  const res = await publicApi.post<User>('/users/signup', data);
  return res.data;
};

// LOGIN
export const login = async (data: LoginRequest) => {
  const res = await publicApi.post<User>('/users/signin', data);
  return res.data; // тут є token
};

//  GET CURRENT USER
export const getMe = async () => {
  const res = await apiClient.get<User>('/users/current');
  return res.data;
};

//  LOGOUT (локальний)
export const logout = () => {
  useAuthStore.getState().clearIsAuthenticated();
};

//  UPDATE  USER (edit  profile)

export const updateMe = async (data: { name?: string; avatar?: string }) => {
  const res = await apiClient.patch<User>('/users/current/edit', data);

  return res.data;
};

// export const updateMe = async (payload: UpdateUserRequest) => {
//   const res = await apiClient.put<User>('/users/current/edit', payload);
//   return res.data;
// };

// export const uploadImage = async (file: File): Promise<string> => {
//   const formData = new FormData();
//   formData.append('file', file);
//   const { data } = await apiClient.post('/users/current/edit', formData);
//   return data.url;
// };

//  old version
/*




// //  тут буде запит на бек  https://petlove.b.goit.study/api

// // const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms)); //штучна затримка
// // await delay(2000); //штучна затримка - у запит поставити

// import axios, { AxiosError } from 'axios';
// import {
//   Friend,
//   LoginRequest,
//   News,
//   NewsListResponce,
//   Notice,
//   NoticesListResponce,
//   RegisterRequest,
//   User,
// } from '@/types/api-types';
// import { useAuthStore } from '@/stores/zustand/authStore';

// export type ApiError = AxiosError<{ error: string }>; // можлива помилка запиту

// // axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

// // axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

// const nextServer = axios.create({
//   baseURL: 'https://petlove.b.goit.study/api',
//   // withCredentials: true, // дозволяє axios працювати з cookie
//   // знову так не працює - виникає CORS, із-за попередніх помилок та обмежень API
// });

// export const internalApi = axios.create({
//   baseURL: 'http://localhost:3000/api',
//   // baseURL: '/api',

//   withCredentials: true,
// });

// // ----------------------------   NEWS

// export const fetchNewsServer = async (page: number, keyword: string) => {
//   const response = await nextServer.get<NewsListResponce>('/news', {
//     params: { page, limit: 6, keyword },
//   });
//   return response.data;
// };

// // API не надає можливості отримати одну новину!!!
// // export const getOneNews = async (_id: string) => {
// //   const res = await axios.get<News>(`/news/${_id}`);
// //   return res.data;
// // };

// // ---------------------------- пошук тварин - NOTICES

// //  ---------------- серверна пагінація тут не працює!!!!
// //  ---------------- перероблю на клієнтську!!!!!

// // export const getNotices = async (page: number) => {
// //   const response = await axios.get<NoticesListResponce>('/notices', {
// //     params: { page, limit: 6 },
// //   });
// //   console.log('api', response.data);
// //   return response.data;
// // };

// ///////////////////////////
// export const getNotices = async (): Promise<Notice[]> => {
//   const response = await nextServer.get<NoticesListResponce>('/notices', {
//     params: { limit: 100 },
//   });
//   return response.data.results;
// };

// export const getSingleNotice = async (id: string) => {
//   const response = await nextServer.get<Notice>(`/notices/${id}`, {});
//   return response.data;
// };

// // запит категорій

// export const getNoticeCategories = async () => {
//   const response = await nextServer.get<string[]>('/notices/categories');

//   return response.data;
// };

// // запит гендер / пол
// export const getNoticeSex = async () => {
//   const response = await nextServer.get<string[]>('/notices/sex');

//   return response.data;
// };

// // запит за типом
// export const getNoticeSpecies = async () => {
//   const response = await nextServer.get<string[]>('/notices/species');

//   return response.data;
// };

// // ---------------------------------   FRIENDS

// export const getFriends = async () => {
//   const response = await nextServer.get<Friend[]>('/friends');
//   return response.data;
// };

// // запит на реєстрацію / login

// export const register = async (data: RegisterRequest) => {
//   const res = await internalApi.post<User>('/auth/register', data);
//   return res.data;
// };

// // export const login = async (data: LoginRequest) => {
// //   const res = await internalApi.post<User>('/auth/login', data);
// //   return res.data;
// // };

// //  через проблеми з cookie переробив без серверного обробника !!!!!
// // Переходимо повністю на JWT + Authorization header.

// export const apiClient = axios.create({
//   baseURL: 'https://petlove.b.goit.study/api',
// });

// apiClient.interceptors.request.use(config => {
//   const token = useAuthStore.getState().user?.token;

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// export const login = async (data: LoginRequest) => {
//   const res = await apiClient.post('/users/signin');
//   // const res = await axios.post(
//   //   'https://petlove.b.goit.study/api/users/signin',
//   //   data
//   // { withCredentials: true }// - delete
//   // );

//   return res.data;
// };

// // ------------------------   Реалізація перевірки сесії

// // type CheckSessionRequest = {
// //   success: boolean;
// // };

// // export const checkSession = async () => {
// //   const res = await internalApi.get<CheckSessionRequest>('/auth/session');
// //   return res.data.success;
// // };

// // -------------------------------     Отримання об`єкта користувача

// // ---    це теж не працює через куукі та серверний обробник - роблю напряму

// export const getMe = async () => {
//   const res = await apiClient.get('/users/current');
//   return res.data;
// };

// // export const getMe = async () => {
// // // const { data } = await internalApi.get<User>('/auth/me');
// // const { data } = await axios.get(
// // 'https://petlove.b.goit.study/api/users/current'
// // {      withCredentials: true,    }
// // );
// // return data;
// // };

// // ---------------------------------   logout

// export const logout = async (): Promise<void> => {
//   await internalApi.post('/auth/logout');
// };

*/
