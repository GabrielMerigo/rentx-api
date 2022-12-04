import { Category } from "../model/Category";
import {
  CreateCategoryDTO,
  ICategoriesRepository,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    return null;
  }

  list(): Category[] {
    return null;
  }

  create({ name, description }: CreateCategoryDTO): void {
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository };
