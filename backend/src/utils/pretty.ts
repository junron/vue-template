import {Request, Response} from "express";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (req: Request, res: Response, json: any): void => {
  if (Object.keys(req.query).includes("pretty")) req.app.set("json spaces", 2);
  res.json(json);
  req.app.set("json spaces", 0);
};
