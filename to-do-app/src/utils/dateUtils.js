import { dateFormat } from '../config';

export function formatDateTime(date) {
  return new Date(date).toLocaleString(undefined, dateFormat);
}

export function getCurrentDateISO() {
  return new Date().toISOString().split('T')[0];
}
