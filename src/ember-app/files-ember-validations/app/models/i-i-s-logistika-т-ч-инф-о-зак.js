import {
  defineNamespace,
  defineProjections,
  Model as ТЧИнфОЗакMixin
} from '../mixins/regenerated/models/i-i-s-logistika-т-ч-инф-о-зак';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧИнфОЗакMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
