// import Fighter from './Fighter';

// type SimpleFighter = Pick<
// Fighter, 'lifePoints' | 'strength' | 'attack' | 'receiveDamage' >;

// export default SimpleFighter;

export default interface SimpleFighter {
  lifePoints: number;
  strength: number;

  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): number;
}