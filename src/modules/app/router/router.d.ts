declare module '@/modules/app/router' {
    import { Router } from 'vue-router';

    const autoLoadRoute: () => Router;

    export default autoLoadRoute;
}