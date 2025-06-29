import { ThemeConfig } from '../types/theme';

export const themes: Record<string, ThemeConfig> = {
  cyberpunk: {
    name: 'Cyberpunk Fitness',
    colors: {
      primary: 'from-cyan-400 to-blue-600',
      secondary: 'from-purple-500 to-pink-600',
      accent: '#00ffff',
      background: 'bg-gray-900',
      surface: 'bg-gray-800/90',
      text: 'text-white',
      textSecondary: 'text-cyan-300',
    },
    fonts: {
      heading: 'font-mono',
      body: 'font-sans',
    },
  },
  minimalist: {
    name: 'Minimalist Power',
    colors: {
      primary: 'from-gray-900 to-gray-700',
      secondary: 'from-gray-600 to-gray-800',
      accent: '#2563eb',
      background: 'bg-gray-50',
      surface: 'bg-white/95',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
    },
    fonts: {
      heading: 'font-serif',
      body: 'font-sans',
    },
  },
  industrial: {
    name: 'Industrial Strength',
    colors: {
      primary: 'from-orange-600 to-red-600',
      secondary: 'from-yellow-500 to-orange-600',
      accent: '#f97316',
      background: 'bg-zinc-900',
      surface: 'bg-zinc-800/90',
      text: 'text-white',
      textSecondary: 'text-orange-300',
    },
    fonts: {
      heading: 'font-black',
      body: 'font-sans',
    },
  },
};