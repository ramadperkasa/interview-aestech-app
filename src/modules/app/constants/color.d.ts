import { Color } from '../types/color.type'

declare module '@/modules/app/constants/color.constant.ts' {
    const BUTTON_COLOR_SOLID: Color
    const BUTTON_COLOR_OUTLINED:Color

    export { BUTTON_COLOR_SOLID, BUTTON_COLOR_OUTLINED };
}