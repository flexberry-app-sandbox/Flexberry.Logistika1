import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  высота: DS.attr('decimal'),
  длина: DS.attr('decimal'),
  категорияГр: DS.attr('string'),
  кодГруза: DS.attr('number'),
  масса: DS.attr('decimal'),
  объем: DS.attr('decimal'),
  ширина: DS.attr('decimal')
});

export let ValidationRules = {
  высота: {
    descriptionKey: 'models.i-i-s-logistika-груз.validations.высота.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  длина: {
    descriptionKey: 'models.i-i-s-logistika-груз.validations.длина.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  категорияГр: {
    descriptionKey: 'models.i-i-s-logistika-груз.validations.категорияГр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодГруза: {
    descriptionKey: 'models.i-i-s-logistika-груз.validations.кодГруза.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  масса: {
    descriptionKey: 'models.i-i-s-logistika-груз.validations.масса.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  объем: {
    descriptionKey: 'models.i-i-s-logistika-груз.validations.объем.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  ширина: {
    descriptionKey: 'models.i-i-s-logistika-груз.validations.ширина.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрузE', 'i-i-s-logistika-груз', {
    кодГруза: attr('Код груза', { index: 0 }),
    категорияГр: attr('Категория груза', { index: 1 }),
    ширина: attr('Ширина', { index: 2 }),
    высота: attr('Высота', { index: 3 }),
    длина: attr('Длина', { index: 4 }),
    масса: attr('Масса', { index: 5 }),
    объем: attr('Объем', { index: 6 })
  });

  modelClass.defineProjection('ГрузL', 'i-i-s-logistika-груз', {
    кодГруза: attr('Код груза', { index: 0 }),
    категорияГр: attr('Категория груза', { index: 1 }),
    ширина: attr('Ширина', { index: 2 }),
    высота: attr('Высота', { index: 3 }),
    длина: attr('Длина', { index: 4 }),
    масса: attr('Масса', { index: 5 }),
    объем: attr('Объем', { index: 6 })
  });
};
