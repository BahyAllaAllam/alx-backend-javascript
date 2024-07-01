export default function cleanSet(set, startString) {
  const result = [];
  
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      result.push(s.slice(startString.length));
    }
  });
  return result.join('-');
};
