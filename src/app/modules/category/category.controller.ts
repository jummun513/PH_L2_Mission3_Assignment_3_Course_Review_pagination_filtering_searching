import { categoryServices } from './category.service';
import sendResponse from '../../utilities/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utilities/catchAsync';

const createCategory = catchAsync(async (req, res) => {
  const data = req.body;

  // call service function to create a new category
  const result = await categoryServices.createCategoryIntoDB(data);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Category is created successfully.',
    data: result,
  });
});

export const categoryControllers = {
  createCategory,
};
