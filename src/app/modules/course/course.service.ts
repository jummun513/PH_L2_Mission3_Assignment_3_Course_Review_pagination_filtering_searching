import { TCourse } from './course.interface';
import { CourseModel } from './course.model';

const createCourseIntoDB = async (course: TCourse) => {
  const result = await CourseModel.create(course);

  // send selective data to frontend
  const sendData = result.toObject({
    virtuals: false,
    versionKey: false,
    transform: (doc, ret) => {
      delete ret.createdAt;
      delete ret.updatedAt;
      delete ret.__v;
    },
  });
  return sendData;
};

export const courseServices = {
  createCourseIntoDB,
};
