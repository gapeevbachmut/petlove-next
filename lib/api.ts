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

export const getNews = async () => {
  const responce = await axios.get<NewsListResponce>('/news');
  return responce.data;
};
