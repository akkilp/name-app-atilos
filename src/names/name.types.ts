interface Name {
  name: string;
  amount: number;
  rank: number;
}

export type CreateName = Pick<Name, 'name'>;

export default Name;
