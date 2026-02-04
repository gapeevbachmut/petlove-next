export type NoticesFiltersState = {
  search: string;
  category: string | null;
  sex: string | null; // = gender
  species: string | null; // = type
  location: string | null;
  sortBy: 'popular' | 'price' | null;
};
