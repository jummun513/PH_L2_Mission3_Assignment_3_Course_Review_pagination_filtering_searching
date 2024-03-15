import express from 'express';
import { coursesControllers } from './courses.controller';

const router = express.Router();

// call controller function to create a new category
router.get('/', coursesControllers.getExpectedCourses);

export const coursesRoutes = router;
