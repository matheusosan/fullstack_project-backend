import { prisma } from "../services/prisma";

export const createService = async (data: any) => {
  const service = await prisma.services.create({
    data,
  });
  return service;
};

export const getAll = async () => {
  const services = await prisma.services.findMany({})

  return services
}
