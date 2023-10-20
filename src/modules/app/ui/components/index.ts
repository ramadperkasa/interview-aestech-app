import { AppLayoutAuthentication, AppLayoutDefault, AppLayoutEmpty } from '@/modules/app/ui/components/layouts';

import { AppAtomButton, AppAtomCard, AppAtomSkeletonCard, AppAtomPagination, AppAtomSkeletonBox, AppAtomSkeletonImage, AppAtomSkeletonText } from '@/modules/app/ui/components/atoms';

const BaseComponentRegister = (app: any) => {
    // Layout
    app.component('AuthenticationLayout', AppLayoutAuthentication);
    app.component('DefaultLayout', AppLayoutDefault);
    app.component('EmptyLayout', AppLayoutEmpty);

    // Atom
    app.component('AtomButton', AppAtomButton);
    app.component('AtomCard', AppAtomCard);
    app.component('AtomPagination', AppAtomPagination);

    app.component('AtomSkeletonCard', AppAtomSkeletonCard);
    app.component('AtomSkeletonImage', AppAtomSkeletonImage);
    app.component('AtomSkeletonText', AppAtomSkeletonText);
    app.component('AtomSkeletonBox', AppAtomSkeletonBox);
}

export default BaseComponentRegister;