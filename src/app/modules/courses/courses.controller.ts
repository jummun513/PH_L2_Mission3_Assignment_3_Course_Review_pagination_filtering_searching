import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utilities/catchAsync';
import sendResponse from '../../utilities/sendResponse';
import { coursesServices } from './courses.service';

const getExpectedCourses = catchAsync(async (req, res) => {
  // call service function to get all categories
  const result = await coursesServices.getExpectedCoursesFromDB(req.query);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Courses retrieved successfully',
    data: result,
  });
});

export const coursesControllers = {
  getExpectedCourses,
};
