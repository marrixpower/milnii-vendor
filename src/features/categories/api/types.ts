export type TCategory = {
  _id: string;
  createdAt: string;
  name: {
    lang: string;
    value: string;
    _id: string;
  }[];
};

export type TCategoryResponse = {
  docs: TCategory[];
  totalCount: number;
};
export type TgGtCategoriesParams = {
  order?: 1 | -1;
  name?: string;
  limit?: string;
  skip?: number;
  page?: number;
  sortBy?: string;
};
