import { Category } from "../model/Category";

type CreateCategoryDTO = {
  name: string;
  description: string;
};

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: CreateCategoryDTO): void;
}

export { CreateCategoryDTO, ICategoriesRepository };
