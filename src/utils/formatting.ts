/**
 * Utils for rendering on frontend.
 * Formatting = formatting data to display for the end user.
 * Transforming = transforming data to use for logic.
 */

/**
 *
 * @param number
 * @param options
 * @returns string
 */
export function formatCurrency(
  number: number,
  options?: { round?: boolean }
): string {
  const { round } = options ?? {};
  const value = round ? Math.round(number) : number;
  const isDecimal = !!(value % 1);
  const formatter = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: isDecimal ? 2 : 0,
    maximumFractionDigits: isDecimal ? 2 : 0,
  });
  return formatter.format(value);
}
