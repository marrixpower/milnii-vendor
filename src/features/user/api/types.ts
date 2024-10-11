//promise types
export type CreateUserRequest = {
  payload: CreateUserPayload;
  response: CreateUserResponse;
};

export type CreateUserPayload = { payload: CreateUser };
export type CreateUserResponse = User;

export type GetUserRequest = {
  payload: GetUserPayload;
  response: GetUserResponse;
};

export type GetUserPayload = {};
export type GetUserResponse = User;

//base types
export type CreateUser = {
  name: string;
  country: string;
  city: string;
  category: string;
  email: string;
};

export type User = {
  firebaseId: string;
  increment: number;
  name: string;
  email: string;
  country: string;
  city: string;
  category: string;
  type: string;
  weddingDate: string;
  role: string;
  _id: string;
};
