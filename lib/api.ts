//  тут буде запит на бек
// https://petlove.b.goit.study/api

// НОВИНИ

/* {  "page": 1,
  "perPage": 6,
  "totalPages": 192,
  "results": [ 
   {
      "_id": "658b694505a6bcd9b9379477",
      "imgUrl": "https://www.nytimes.com/images/2023/01/12/fashion/11pitti-pet10-flhz/11pitti-pet10-flhz-blog480.jpg",
      "title": "Men's Wear Puts on the Dog",
      "text": "A pavilion dedicated to the multibillion-dollar market in pet apparel makes its debut at the world's largest men's wear trade show.",
      "date": "2023-01-12T08:00:08+0000",
      "url": "https://www.nytimes.com/2023/01/12/style/mens-wear-puts-on-the-dog.html",
      "id": "nyt://article/fe6a2ccd-b317-5255-9cb8-797151f0bb06"
    }, */

import axios from 'axios';

export type News = {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
};

export type NewsListResponce = {
  results: News[];
  totalPages: number;
};

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms)); //штучна затримка

export const getNews = async () => {
  await delay(2000); //штучна затримка

  const responce = await axios.get<NewsListResponce>('/news');
  return responce.data;
};

//  пошук тварин

/* {
  "page": 1,
  "perPage": 2,
  "totalPages": 26,
  "results": [
    {
      "_id": "6589436d05a6bcd9b9379420",
      "species": "dog",
      "category": "sell",
      "price": 150,
      "title": "Golden Retriever Puppies",
      "name": "Max",
      "birthday": "2022-01-10",
      "comment": "Adorable puppy looking for a loving home.",
      "sex": "male",
      "location": "641ffcc1ae4e889a02d25ca5",
      "imgURL": "https://ftp.goit.study/img/pets/1.webp",
      "createdAt": "2023-12-11T10:43:28.477Z",
      "user": "6576e7d0c4cc99fc5ef94221",
      "popularity": 2,
      "updatedAt": "2023-12-25T11:41:12.493Z"
    }, */

// get_notices

export type Notice = {
  _id: string;
  species: string;
  category: string;
  price: number;
  title: string;
  name: string;
  birthday: string;
  comme: string;
  location: string;
  imgURL: string;
  user: string;
  popularity: number;
};

export type NoticesListResponce = {
  results: Notice[];
  totalPages: number;
};

export const getNotices = async () => {
  await delay(2000); //штучна затримка

  const responce = await axios.get<NoticesListResponce>('/notices');
  return responce.data;
};

//    FRIENDS

/* [
  {
    "_id": "658b664c05a6bcd9b937945c",
    "title": "Sirius",
    "url": "https://dogcat.com.ua",
    "addressUrl": "https://goo.gl/maps/iq8NXEUf31EAQCzc6",
    "imageUrl": "https://ftp.goit.study/img/petsfriends/1.webp",
    "address": "Fedorivka, Kyiv Oblast, Ukraine, 07372",
    "workDays": [
      {
        "_id": "658f39fccc54e981e2d98778",
        "isOpen": false
      },
      {
        "_id": "658f39fccc54e981e2d98779",
        "isOpen": false
      },
      { */

export type WorkDay = {
  _id: string;
  isOpen: boolean;
};

export type Friend = {
  _id: string;
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  address: string;
  workDays: WorkDay[];
};

export const getFriends = async () => {
  await delay(2000); //штучна затримка

  const responce = await axios.get<Friend[]>('/friends');
  // console.log('api', responce.data);

  return responce.data;
};
