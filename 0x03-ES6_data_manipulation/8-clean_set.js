export default function cleanSet(set, startString) {
  const result = [];
  
  if (
    !set && !startString && !(set instanceof Set) && typeof startString !== 'string'
  ) {
    return '';
  }
  
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSlicing = value.substring(startString.length);
      
      if (valueSlicing && valueSlicing !== value) {
        result.push(valueSlicing);
      }
    }
  }
  return result.join('-');
}
