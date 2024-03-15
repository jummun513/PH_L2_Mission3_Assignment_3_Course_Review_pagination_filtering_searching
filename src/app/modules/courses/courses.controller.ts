import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utilities/catchAsync';
import { coursesServices } from './courses.service';

const getExpectedCourses = catchAsync(async (req, res) => {
  // call service function to get all categories
  const result = await coursesServices.getExpectedCoursesFromDB(req.query);

  res.status(StatusCodes.OK).json({
    success: true,
    StatusCode: StatusCodes.OK,
    message: 'Courses retrieved successfully',
    meta: {
      page: Number(req?.query?.page) || 1,
      limit: Number(req?.query?.limit) || 10,
      total: result?.count,
    },
    data: result?.data,
  });
});

export const coursesControllers = {
  getExpectedCourses,
};
