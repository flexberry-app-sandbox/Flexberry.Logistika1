import { Serializer as ГрузSerializer } from
  '../mixins/regenerated/serializers/i-i-s-logistika-груз';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГрузSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
