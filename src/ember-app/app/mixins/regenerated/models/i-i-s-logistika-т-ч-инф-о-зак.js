import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  груз: DS.belongsTo('i-i-s-logistika-груз', { inverse: null, async: false }),
  докумПостав: DS.belongsTo('i-i-s-logistika-докум-постав', { inverse: 'тЧИнфОЗак', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-logistika-т-ч-инф-о-зак.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  груз: {
    descriptionKey: 'models.i-i-s-logistika-т-ч-инф-о-зак.validations.груз.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докумПостав: {
    descriptionKey: 'models.i-i-s-logistika-т-ч-инф-о-зак.validations.докумПостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧИнфОЗакE', 'i-i-s-logistika-т-ч-инф-о-зак', {
    груз: belongsTo('i-i-s-logistika-груз', 'Код груза', {
      кодГруза: attr('Код груза', { index: 1, hidden: true }),
      категорияГр: attr('Категория груза', { index: 2 }),
      масса: attr('Масса груза', { index: 3 }),
      объем: attr('Объем груза', { index: 4 })
    }, { index: 0, displayMemberPath: 'кодГруза' }),
    количество: attr('Количество груза', { index: 5 })
  });
};
