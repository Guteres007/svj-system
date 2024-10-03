import { registerEnumType } from '@nestjs/graphql';

export enum Position {
  CHAIRMAN_BOARD = 'Předseda',
  VICE_CHAIRMAN_BOARD = 'Místopředseda',
  MEMBER_BOARD = 'Člen výboru',

  CHAIRMAN_CONTROL = 'Předseda kontrolní komise',
  MEMBER_CONTROL = 'Člen kontrolní komise',

  ADMINISTRATOR = 'Administrátor',
}

registerEnumType(Position, {
  name: 'Position',
});
