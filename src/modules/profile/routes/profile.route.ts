// Components
import AppCommonWrapper from '@/modules/app/ui/components/common/AppCommonWrapper.vue';

// Constant
import { LAYOUT } from '@/modules/app/constants/layout.constant'

const routes = [
    {
        path: '/profile',
        component: AppCommonWrapper,
        meta: {
            layout: LAYOUT.DEFAULT,
            authRequired: true,
        },
        children: [
            {
                path: '',
                name: 'profile',
                component: () => import('../ui/ProfileUI.vue'),
            },
        ],
    },
];

export default routes;