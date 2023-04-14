import { createService, getAll } from "../repositorys/service.repository";
import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
  try {
    const service = await createService(req.body);
    res.status(200).send(service);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const services = await getAll();
    res.status(200).send(services);
  } catch (error) {
    res.status(400).send(error);
  }
};
