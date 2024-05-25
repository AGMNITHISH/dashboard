export const perdentageFormat = (percent: number) => `${percent.toFixed(2)}%`;

export const numberFormat = (value: number) =>
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(value);
