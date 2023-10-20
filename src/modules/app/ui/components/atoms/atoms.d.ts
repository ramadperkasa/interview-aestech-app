declare module '@/modules/app/ui/components/atoms' {
    import { defineComponent } from 'vue';

    const AppAtomButton: ReturnType<typeof defineComponent>;
    const AppAtomCard: ReturnType<typeof defineComponent>;
    const AppAtomPagination: ReturnType<typeof defineComponent>;

    // Skeleton
    const AppAtomSkeletonCard: ReturnType<typeof defineComponent>;
    const AppAtomSkeletonImage: ReturnType<typeof defineComponent>;
    const AppAtomSkeletonText: ReturnType<typeof defineComponent>;
    const AppAtomSkeletonBox: ReturnType<typeof defineComponent>;

    export { AppAtomButton, AppAtomCard, AppAtomSkeletonCard, AppAtomPagination, AppAtomSkeletonImage, AppAtomSkeletonText, AppAtomSkeletonBox };
}