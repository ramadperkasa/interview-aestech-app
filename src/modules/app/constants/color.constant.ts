import { Color } from '../types/color.type'

const BUTTON_COLOR_SOLID:Color = {
    primary: "text-white hover:text-white focus:ring-3 ripple-bg-primary bg-primary focus:ring-primary/50 hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 dark:focus:ring-primary/50",
    secondary: "text-white hover:text-white focus:ring-3 ripple-bg-secondary bg-secondary focus:ring-secondary/50 hover:bg-secondary/70 dark:bg-secondary dark:hover:bg-secondary/90 dark:focus:ring-secondary/50",
    'secondary-accent': "text-white hover:text-white focus:ring-3 text-black/50 ripple-bg-secondary bg-secondary-accent focus:ring-secondary-accent/50 hover:bg-secondary-accent/90 dark:bg-secondary-accent dark:hover:bg-secondary-accent/90 dark:focus:ring-secondary-accent/50",
    blue: 'text-white hover:text-white focus:ring-3 ripple-bg-blue bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
    red: 'text-white hover:text-white focus:ring-3 ripple-bg-red bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800',
    green: 'text-white hover:text-white focus:ring-3 ripple-bg-green bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
    yellow: 'text-white hover:text-white focus:ring-3 ripple-bg-yellow bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800',
    gray: 'text-white hover:text-white focus:ring-3 ripple-bg-gray bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800',
}

const BUTTON_COLOR_OUTLINED:Color = {
    primary: "border-primary focus:ring-primary/50 hover:bg-primary/90 dark:border-primary dark:hover:bg-primary/90 dark:focus:ring-primary/50",
    secondary: "border-secondary focus:ring-secondary/50 hover:bg-secondary-90 dark:border-secondary dark:hover:bg-secondary/90 dark:focus:ring-secondary/50",
    'secondary-accent': "text-black/50 border-secondary-accent focus:ring-secondary-accent/50 hover:bg-secondary-accent-90 dark:border-secondary-accent dark:hover:bg-secondary-accent-90 dark:focus:ring-secondary-accent/50",
    blue: 'text-blue-500 ripple-bg-white bg-white hover:bg-blue-100 focus:ring-blue-300 border-blue-200 hover:text-blue-900 dark:bg-blue-700 dark:text-blue-300 dark:border-blue-500 dark:hover:text-white dark:hover:bg-blue-600',
    red: 'text-red-500 ripple-bg-white bg-white hover:bg-red-100 focus:ring-red-300 border-red-200 hover:text-red-900 dark:bg-red-700 dark:text-red-300 dark:border-red-500 dark:hover:text-white dark:hover:bg-red-600',
    green: 'text-green-500 ripple-bg-white bg-white hover:bg-green-100 focus:ring-green-300 border-green-200 hover:text-green-900 dark:bg-green-700 dark:text-green-300 dark:border-green-500 dark:hover:text-white dark:hover:bg-green-600',
    yellow: 'text-yellow-500 ripple-bg-white bg-white hover:bg-yellow-100 focus:ring-yellow-300 border-yellow-200 hover:text-yellow-900 dark:bg-yellow-700 dark:text-yellow-300 dark:border-yellow-500 dark:hover:text-white dark:hover:bg-yellow-600',
    gray: 'text-gray-500 ripple-bg-white bg-white hover:bg-gray-100 focus:ring-blue-300 border-gray-200 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600',
}

export { BUTTON_COLOR_SOLID, BUTTON_COLOR_OUTLINED}