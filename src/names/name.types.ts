interface Name {
  name: string;
  amount: number;
}

export type CreateName = Pick<Name, 'name'>;

export default Name;
