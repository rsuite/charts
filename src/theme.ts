/**
 * rsuite design tokens for chart styling
 */

export const palette = [
  '#2563EB', // Blue
  '#10B981', // Emerald
  '#F59E0B', // Amber
  '#8B5CF6', // Violet
  '#F43F5E', // Rose
  '#0EA5E9', // Sky Blue
  '#F97316', // Orange
  '#14B8A6', // Teal
  '#EC4899', // Pink
  '#6366F1', // Indigo
];

export const darkPalette = [
  '#3B82F6', // Blue-500
  '#34D399', // Emerald-400
  '#FBBF24', // Amber-400
  '#A78BFA', // Violet-400
  '#FB7185', // Rose-400
  '#38BDF8', // Sky Blue-400
  '#FB923C', // Orange-400
  '#2DD4BF', // Teal-400
  '#F472B6', // Pink-400
  '#818CF8', // Indigo-400
];

export interface ColorTokens {
  axisLine: string;
  axisLabel: string;
  axisTick: string;
  grid: string;
  legendText: string;
  tooltipBackground: string;
  tooltipBorder: string;
  tooltipText: string;
  tooltipLabel: string;
  emptyText: string;
}

export const colors: ColorTokens = {
  // Axis
  axisLine: '#E2E8F0', // slate-200
  axisLabel: '#64748B', // slate-500
  axisTick: '#E2E8F0',

  // Grid
  grid: '#F1F5F9', // slate-100

  // Legend
  legendText: '#475569', // slate-600

  // Tooltip
  tooltipBackground: 'rgba(255, 255, 255, 0.98)',
  tooltipBorder: '#E2E8F0',
  tooltipText: '#0F172A', // slate-900
  tooltipLabel: '#64748B', // slate-500

  // Empty state
  emptyText: '#94A3B8', // slate-400
};

export const darkColors: ColorTokens = {
  // Axis
  axisLine: '#334155', // slate-700
  axisLabel: '#94A3B8', // slate-400
  axisTick: '#334155',

  // Grid
  grid: 'rgba(255, 255, 255, 0.1)', // Translucent white for grid

  // Legend
  legendText: '#CBD5E1', // slate-300

  // Tooltip
  tooltipBackground: '#1E293B', // slate-800
  tooltipBorder: '#334155', // slate-700
  tooltipText: '#F8FAFC', // slate-50
  tooltipLabel: '#94A3B8', // slate-400

  // Empty state
  emptyText: '#64748B', // slate-500
};
