export type NoticesFiltersState = {
  search: string;
  category: string | null;
  sex: string | null; // = gender
  species: string | null; // = type
  location: string | null;
  // sortBy: 'popular' | 'price' | null;
  sortBy: SortBy;
};

export type LocationOption = {
  value: string;
  label: string;
};

export type SortBy =
  | 'popular_desc'
  | 'popular_asc'
  | 'price_asc'
  | 'price_desc'
  | null;

// ------------------------------------

// Тип стану авторизації
export type User = {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  noticesFavorites: [];
};

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
