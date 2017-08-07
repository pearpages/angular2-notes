export interface Hero {
  id: number;
  name: string;
  addresses: Array<Address>;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Whirlwind',
    addresses: [
      {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
      {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
    ]
  },
  {
    id: 2,
    name: 'Bombastic',
    addresses: [
      {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
    ]
  },
  {
    id: 3,
    name: 'Magneta',
    addresses: [ ]
  },
];

export const states = ['CA', 'MD', 'OH', 'VA'];

export function makeAddress(): Address {
  return {
    street:  '',
    city: '',
    state: '',
    zip: ''
  };
}
