export function isObjectKeyExist(object, key) {
  const keys = Object.keys(object);

  if (keys.find((k) => k === key) === key) {
    return true;
  }

  return false;
}

export function getObjectValues(object) {
  const values = Object.values(object);

  return values;
}

export function getKey(object) {
  return Object.keys(object);
}
