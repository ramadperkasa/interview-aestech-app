import { createRouter, createWebHistory } from 'vue-router';

import {
  AppCommonEntryPoint,
  AppCommonNotAuthorized,
  AppCommonNotFound,
} from '@/modules/app/ui/components/common'


const autoLoadRoute = async () => {
  const routes = [];
  const modules: any = import.meta.glob('/**/*.route.ts');

  for (const path in modules) {
    const module = await modules[path]();
    routes.push(...module.default);
  }

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      // Entry Point
      {
        path: '/',
        component: AppCommonEntryPoint,
      },

      // Auto register routes
      ...routes,

      // 403
      {
        path: '/not-authorized',
        name: 'not-authorized',
        component: AppCommonNotAuthorized,
      },

      // 404
      {
        path: '/:catchAll(.*)',
        component: AppCommonNotFound,
      },
    ],
  });

  return router;
};

export default autoLoadRoute;