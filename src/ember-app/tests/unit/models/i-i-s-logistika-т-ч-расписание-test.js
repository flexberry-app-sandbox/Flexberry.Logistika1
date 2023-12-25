import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-logistika-т-ч-расписание', 'Unit | Model | i-i-s-logistika-т-ч-расписание', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-logistika-баржи',
    'model:i-i-s-logistika-груз',
    'model:i-i-s-logistika-докум-постав',
    'model:i-i-s-logistika-докум-результ-п',
    'model:i-i-s-logistika-загруз-контейн',
    'model:i-i-s-logistika-загрузка-баржи',
    'model:i-i-s-logistika-клиенты',
    'model:i-i-s-logistika-контейнеры',
    'model:i-i-s-logistika-организация',
    'model:i-i-s-logistika-сотрудники',
    'model:i-i-s-logistika-т-ч-дост-кон',
    'model:i-i-s-logistika-т-ч-инф-о-грузе',
    'model:i-i-s-logistika-т-ч-инф-о-зак',
    'model:i-i-s-logistika-т-ч-инф-о-конт',
    'model:i-i-s-logistika-т-ч-расписание',
    'model:i-i-s-logistika-т-ч-своб-мест',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
