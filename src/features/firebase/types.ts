export type CreateUser = {
  email: string;
  password: string;
  callback: (success: boolean) => void;
};

export type SignInUser = {
  email: string;
  password: string;
  callback: (success: boolean) => void;
};

export type ResetPasswordEmailProps = {
  email: string;
};

export type ConfirmResetPasswordProps = {
  newPassword: string;
  code: string;
};
