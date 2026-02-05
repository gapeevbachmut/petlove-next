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
