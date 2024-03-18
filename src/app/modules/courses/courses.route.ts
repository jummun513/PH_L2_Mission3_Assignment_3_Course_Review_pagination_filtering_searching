import express from 'express';
import { coursesControllers } from './courses.controller';

const router = express.Router();

// call controller function to create a new category
router.get('/', coursesControllers.getExpectedCourses);
router.get('/:courseId/reviews', coursesControllers.getSingleCourseWithReview);

export const coursesRoutes = router;
