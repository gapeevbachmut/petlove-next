export type NoticesFiltersState = {
  search: string;
  category: string | null;
  gender: string | null;
  type: string | null;
  location: string | null;
  sortBy: 'popular' | 'price' | null;
};
