import express from 'express';
import validateRequest from '../../utilities/validateRequest';
import { courseValidations } from './course.validation';
import { courseControllers } from './course.controller';

const router = express.Router();

// call controller function to create a new category
router.post(
  '/',
  validateRequest(courseValidations.courseCreateValidationSchema),
  courseControllers.createCourse,
);

export const courseRoutes = router;
