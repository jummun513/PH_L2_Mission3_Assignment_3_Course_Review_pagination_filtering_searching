import { TCategory } from './category.interface';
import { CategoryModel } from './category.model';

const createCategoryIntoDB = async (category: TCategory) => {
  const result = await CategoryModel.create(category);
  return result;
};

export const categoryServices = {
  createCategoryIntoDB,
};
