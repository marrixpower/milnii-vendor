//promise types

export type CreateBusinessRequest = {
  payload: CreateBusinessPayload;
  response: CreateBusinessResponse;
};

export type CreateBusinessPayload = {
  data: CreateBusiness;
};
export type CreateBusinessResponse = {
  _id: string;
};

export type AddPhotosRequest = {
  payload: AddPhotosPayload;
  response: AddPhotosResponse;
};

export type AddPhotosPayload = {
  _id: string;
  data: FormData;
};
export type AddPhotosResponse = {};

export type GetBusinessRequest = {
  payload: GetBusinessPayload;
  response: GetBusinessResponse;
};

export type GetBusinessPayload = {
  _id: string;
};

export type GetBusinessResponse = GetBusiness;

export type UpdateBusinessRequest = {
  payload: UpdateBusinessPayload;
  response: UpdateBusinessResponse;
};

export type UpdateBusinessPayload = {
  _id: string;
  data: CreateBusiness;
};

export type UpdateBusinessResponse = GetBusiness;

export type GetBusinessesRequest = {
  payload: Partial<GetBusinessesPayload>;
  response: GetBusinessesResponse;
};

export type GetBusinessesPayload = {
  owner: string;
  page: number;
  limit: number;
  order: 1 | -1;
  sortBy: string;
};

export type GetBusinessesResponse = {
  docs: GetBusiness[];
  totalCount: number;
};

//base types
export type CreateBusiness = Record<CreateBusinessRequiredKeys, string> &
  Partial<Record<CreateBusinessKeys, string>> &
  Partial<Record<"price", number>> & {
    location: {
      type: string;
      coordinates: number[];
    };
  };

type CreateBusinessRequiredKeys =
  | "name"
  | "city"
  | "phone"
  | "category"
  | "site"
  | "description";

type CreateBusinessKeys = "address" | "postalCode" | "booking" | "email";

export type TCategory = {
  _id: string;
  createdAt: string;
  name: {
    lang: string;
    value: string;
    _id: string;
  }[];
};

export type GetBusiness = {
  _id: string;
  owner: string;
  increment: number;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  category: TCategory;
  site: string;
  booking: string;
  images: string[];
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  location: {
    type: string;
    coordinates: number[];
  };
};
