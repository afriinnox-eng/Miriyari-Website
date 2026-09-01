// Unit test for the contact form validation rules (plan step: form validation).
// Plain Node — no test framework, no DOM, no build step.
import assert from 'node:assert/strict';
import { REQUIRED, validateContact } from '../src/lib/contactValidation.js';

const full = {
  name: 'Aline Uwase',
  email: 'aline@example.com',
  company: 'BEYI Group',
  role: 'Founder seeking grants',
  sector: 'Agritech',
  message: 'We are raising a seed round.',
};

// empty object → every required field flagged
const empty = validateContact({});
assert.equal(Object.keys(empty).length, REQUIRED.length, 'empty form flags all required fields');
REQUIRED.forEach((k) => assert.equal(empty[k], true, `required field "${k}" flagged`));

// whitespace-only counts as empty
const ws = validateContact({ name: '   ', email: ' ', message: '\t\n' });
assert.deepEqual(Object.keys(ws).sort(), [...REQUIRED].sort(), 'whitespace-only values are invalid');

// missing single field → only that field flagged
const partial = validateContact({ name: 'Aline', email: 'aline@example.com', message: '' });
assert.deepEqual(partial, { message: true }, 'only the missing field is flagged');

// complete form → no errors
assert.deepEqual(validateContact(full), {}, 'valid form passes clean');

// undefined / missing values are tolerated as empty
assert.equal(validateContact(undefined)[REQUIRED[0]], true, 'undefined values handled');

console.log(`PASS form validation — required: ${REQUIRED.join(', ')}; empty, whitespace, partial, valid and undefined cases all correct.`);
