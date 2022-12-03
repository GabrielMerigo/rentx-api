import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepositories = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepositories.findByName(name);

  if (categoryAlreadyExists)
    return response.status(400).json({ error: "Category Already Exists" });

  categoriesRepositories.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepositories.list();

  return response.status(200).send(categories);
});

export { categoriesRoutes };
