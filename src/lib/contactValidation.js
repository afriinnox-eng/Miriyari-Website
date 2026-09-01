// Pure validation for the contact form — kept free of JSX so it can be
// unit-tested directly from Node without a build step.
export const REQUIRED = ['name', 'email', 'message'];

export function validateContact(values) {
  const v = values || {};
  const errs = {};
  REQUIRED.forEach((k) => {
    if (!(v[k] || '').trim()) errs[k] = true;
  });
  return errs;
}
