import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names into a single string, prioritizing Tailwind CSS
 * classes and handling conditional and duplicate classes.
 *
 * @param {...*} inputs - Any number of arguments, which can be strings, arrays of strings,
 * or objects where keys are class names and values are booleans
 * (for conditional class inclusion).
 * @returns {string} - A single string containing the combined class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
