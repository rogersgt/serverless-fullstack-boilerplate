import { Request, Response } from 'express';

// eslint-disable-next-line import/prefer-default-export
export async function getStatus(_req: Request, res: Response) {
  return res.status(200).send({
    message: 'okay',
  });
}
