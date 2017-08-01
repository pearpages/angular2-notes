export interface Hero {
  id: number;
  name: string;
  power: Power;
  alterEgo?: string;
}

export type Power = 'Really Smart' | 'Super Flexible' | 'Super Hot' | 'Weather Changer' | 'Hard Worker';
