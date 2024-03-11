import { Schema, model } from 'mongoose';
import { TCourse, TDetail, TTag } from './course.interface';
import AppError from '../../errors/AppError';
import { StatusCodes } from 'http-status-codes';

const tagSchema = new Schema<TTag>({
  name: {
    type: String,
    required: [true, 'Tag name is required.'],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const detailSchema = new Schema<TDetail>({
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: [true, 'Level is required.'],
  },
  description: {
    type: String,
    required: [true, 'Description is required.'],
  },
});

const courseSchema = new Schema<TCourse>(
  {
    title: {
      type: String,
      required: [true, 'Title is required.'],
      // unique: true,
    },
    instructor: {
      type: String,
      required: [true, 'Instructor is required.'],
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      required: [true, 'categoryId is required.'],
      // unique: true,
      ref: 'categories',
    },
    price: {
      type: Number,
      required: [true, 'Price is required.'],
    },
    tags: [tagSchema],
    startDate: {
      type: String,
      required: [true, 'Start Date is required.'],
    },
    endDate: {
      type: String,
      required: [true, 'End Date is required.'],
    },
    language: {
      type: String,
      required: [true, 'Language is required.'],
    },
    provider: {
      type: String,
      required: [true, 'Provider is required.'],
    },
    durationInWeeks: {
      type: Number,
    },
    details: detailSchema,
  },
  {
    timestamps: true,
  },
);

// check name is exist or not before save data
courseSchema.pre('save', async function (next) {
  const durationInWeeks = Math.ceil(
    (new Date(this.endDate).getTime() - new Date(this.startDate).getTime()) /
      (24 * 3600 * 1000 * 7),
  );
  this.durationInWeeks = durationInWeeks;

  const isTitleExist = await CourseModel.findOne({ title: this.title });
  if (isTitleExist) {
    throw new AppError(
      StatusCodes.CONFLICT,
      `${this.title} is already existed.`,
    );
  }
  next();
});

export const CourseModel = model<TCourse>('course', courseSchema);
