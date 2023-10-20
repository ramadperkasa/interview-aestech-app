declare module '@/modules/app/ui/components/common' {
  import { defineComponent } from 'vue';

  const AppCommonEntryPoint: ReturnType<typeof defineComponent>;
  const AppCommonNotAuthorized: ReturnType<typeof defineComponent>;
  const AppCommonNotFound: ReturnType<typeof defineComponent>;

  export { AppCommonEntryPoint, AppCommonNotAuthorized, AppCommonNotFound };
}