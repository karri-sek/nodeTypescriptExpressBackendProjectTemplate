import { Request, Response } from 'express';
import { Token } from '../helpers/Token';
import { shouldByPassAuthHook } from '../utils/shouldByPassAuthHook';
export const authCheck = async (
  req: Request,
  res: Response,
  next: () => void
): Promise<void> => {
  if (shouldByPassAuthHook(req.method, req.url)) {
    return;
  }
  try {
    const headers = <{ 'woodpecker-token': string }>req.headers;
    Token.verifyJwt(headers['woodpecker-token']);
  } catch (e) {
    res.sendStatus(403);
    throw new Error(`Token validation failed:${e.message}`);
  }

  next();
};
export default authCheck;
