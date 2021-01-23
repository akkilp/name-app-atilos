export interface Name {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  name: string;
  amount: number;
}

export enum SortBy {
  AMOUNT_SMALLEST_FIRST = 'AMOUNT_SMALLEST_FIRST',
  AMOUNT_LARGEST_FIRST = 'AMOUNT_LARGEST_FIRST',
  ALPHABETICALLY_SORTED = 'ALPHABETICALLY_SORTED',
  ALPHABETICALLY_SORTED_REVERSE = 'ALPHABETICALLY_SORTED_REVERSE',
}
