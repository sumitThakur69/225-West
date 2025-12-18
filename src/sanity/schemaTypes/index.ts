import { type SchemaTypeDefinition } from 'sanity'
import event from './event';
import contactSubmission from './contactSubmission';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event , contactSubmission],
}
