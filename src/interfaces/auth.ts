
export default interface ILoginForm {
    email: string;
    password: string;
}

export default interface IRefreshToken {
    refreshToken: {
      access_token: string;
      refresh_token: string;
    };
  }