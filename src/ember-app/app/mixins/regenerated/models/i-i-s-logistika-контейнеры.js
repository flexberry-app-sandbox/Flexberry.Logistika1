import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  высота: DS.attr('decimal'),
  длина: DS.attr('decimal'),
  максВес: DS.attr('decimal'),
  наимКонтей: DS.attr('string'),
  номерКонтей: DS.attr('number'),
  объем: DS.attr('decimal'),
  ширина: DS.attr('decimal')
});

export let ValidationRules = {
  высота: {
    descriptionKey: 'models.i-i-s-logistika-контейнеры.validations.высота.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  длина: {
    descriptionKey: 'models.i-i-s-logistika-контейнеры.validations.длина.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  максВес: {
    descriptionKey: 'models.i-i-s-logistika-контейнеры.validations.максВес.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  наимКонтей: {
    descriptionKey: 'models.i-i-s-logistika-контейнеры.validations.наимКонтей.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерКонтей: {
    descriptionKey: 'models.i-i-s-logistika-контейнеры.validations.номерКонтей.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  объем: {
    descriptionKey: 'models.i-i-s-logistika-контейнеры.validations.объем.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  ширина: {
    descriptionKey: 'models.i-i-s-logistika-контейнеры.validations.ширина.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтейнерыE', 'i-i-s-logistika-контейнеры', {
    номерКонтей: attr('Номер контейнера', { index: 0 }),
    наимКонтей: attr('Наименование контейнера', { index: 1 }),
    длина: attr('Длина', { index: 2 }),
    ширина: attr('Ширина', { index: 3 }),
    высота: attr('Высота', { index: 4 }),
    объем: attr('Объем', { index: 5 }),
    максВес: attr('Максимальный вес', { index: 6 })
  });

  modelClass.defineProjection('КонтейнерыL', 'i-i-s-logistika-контейнеры', {
    номерКонтей: attr('Номер контейнера', { index: 0 }),
    наимКонтей: attr('Наименование контейнера', { index: 1 }),
    длина: attr('Длина', { index: 2 }),
    ширина: attr('Ширина', { index: 3 }),
    высота: attr('Высота', { index: 4 }),
    объем: attr('Объем', { index: 5 }),
    максВес: attr('Максимальный вес', { index: 6 })
  });
};
