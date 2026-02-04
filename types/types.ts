export type NoticesFiltersState = {
  search: string;
  category: string | null;
  sex: string | null; // = gender
  species: string | null; // = type
  location: string | null;
  sortBy: 'popular' | 'price' | null;
};

export type LocationOption = {
  value: string;
  label: string;
};
