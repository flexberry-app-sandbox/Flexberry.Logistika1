import { Serializer as ЗагрузКонтейнSerializer } from
  '../mixins/regenerated/serializers/i-i-s-logistika-загруз-контейн';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗагрузКонтейнSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
