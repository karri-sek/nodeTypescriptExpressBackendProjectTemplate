interface JWTDecodeResponse {
  payload: {
    exp: number;
    iat: number;
    iss: string;
    sub: string;
  };
}

export { JWTDecodeResponse };
