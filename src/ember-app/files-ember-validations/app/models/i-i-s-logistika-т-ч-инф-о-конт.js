import {
  defineNamespace,
  defineProjections,
  Model as ТЧИнфОКонтMixin
} from '../mixins/regenerated/models/i-i-s-logistika-т-ч-инф-о-конт';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧИнфОКонтMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
