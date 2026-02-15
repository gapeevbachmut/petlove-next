// ----------------------------   НОВИНИ

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

// ---------------------------- пошук тварин  - notices

export type Notice = {
  _id: string;
  species: string;
  category: string;
  price: number;
  title: string;
  name: string;
  sex: string;
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

// ---------------------------------   FRIENDS

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

// --------------------------------------   register / login  /  ...

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type User = {
  _id: string;
  email: string;
  name?: string;
  avatar?: string;
  phone?: string;
  token?: string;
  createdAt: Date;
  updatedAt: Date;
};
// noticesViewed []
// noticesFavorites []
//  pets []
//

export type UpdateUserRequest = {
  name?: string;
  avatar?: string;
};
