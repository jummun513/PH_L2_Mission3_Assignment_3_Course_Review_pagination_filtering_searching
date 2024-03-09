import { Router } from 'express';
import { categoryRoutes } from '../modules/category/category.route';

const router = Router();

const modulesRoutes = [
  {
    path: '/categories',
    route: categoryRoutes,
  },
];

modulesRoutes.forEach(e => router.use(e.path, e.route));

export default router;
