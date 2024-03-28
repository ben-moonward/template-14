/**
 * `cn` is a combination of twMerge & clsx. Makes conditional styling much simpler and readable.
 */

import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
