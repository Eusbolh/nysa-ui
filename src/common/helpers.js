export const appendClasses = (baseClass, classesToAppend) => {
  if (classesToAppend) {
    return [baseClass, classesToAppend].join(' ');
  }
  return baseClass;
};

export const appendIntent = (baseClass, intentToAppend) => {
  if (intentToAppend) {
    return [baseClass, intentToAppend].join(' ');
  }
  return baseClass;
};
