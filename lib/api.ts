//  тут буде запит на бек  https://petlove.b.goit.study/api

// ----------------------------   NEWS

import {
  Friend,
  News,
  NewsListResponce,
  Notice,
  NoticesListResponce,
} from '@/types/api-types';
import axios from 'axios';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';
// axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms)); //штучна затримка
// await delay(2000); //штучна затримка - у запит поставити

export const getNews = async (page: number, keyword: string) => {
  const response = await axios.get<NewsListResponce>('/news', {
    params: { page, limit: 6, keyword },
  });
  // console.log('api-news', response.data);
  return response.data;
};

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
  const response = await axios.get<NoticesListResponce>('/notices', {
    params: { limit: 100 },
  });
  console.log(response.data.results);

  return response.data.results;
};

getNotices();

export const getSingleNotice = async (id: string, token: string) => {
  const response = await axios.get<Notice>(`/notices/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// запит категорій

export const getNoticeCategories = async () => {
  const response = await axios.get<string[]>('/notices/categories');

  return response.data;
};

// запит гендер / пол
export const getNoticeSex = async () => {
  const response = await axios.get<string[]>('/notices/sex');

  return response.data;
};

// запит за типом
export const getNoticeSpecies = async () => {
  const response = await axios.get<string[]>('/notices/species');

  return response.data;
};

// ---------------------------------   FRIENDS

export const getFriends = async () => {
  const response = await axios.get<Friend[]>('/friends');
  return response.data;
};
