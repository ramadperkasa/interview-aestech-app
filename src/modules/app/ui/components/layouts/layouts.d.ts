declare module '@/modules/app/ui/components/layouts' {
    import { defineComponent } from 'vue';
    
    const AppLayoutAuthentication: ReturnType<typeof defineComponent>;
    const AppLayoutDefault: ReturnType<typeof defineComponent>;
    const AppLayoutEmpty: ReturnType<typeof defineComponent>;
    
    export { AppLayoutAuthentication, AppLayoutDefault, AppLayoutEmpty };
}