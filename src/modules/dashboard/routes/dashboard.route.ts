// Components
import AppCommonWrapper from '@/modules/app/ui/components/common/AppCommonWrapper.vue';

// Constant
import { LAYOUT } from '@/modules/app/constants/layout.constant'

const routes = [
    {
        path: '/dashboard',
        component: AppCommonWrapper,
        meta: {
            layout: LAYOUT.DEFAULT,
            authRequired: true,
        },
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('../ui/DashboardUI.vue'),
            },
        ],
    },
];

export default routes;