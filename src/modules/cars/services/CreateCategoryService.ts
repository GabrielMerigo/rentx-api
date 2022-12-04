import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

type Request = {
  name: string;
  description: string;
};

class CreateCategoryServive {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: Request): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error("Category already exists");

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryServive };
