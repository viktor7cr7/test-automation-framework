
/* var isIsomorphic = function (s, t) {
  if (s.lenght !== t.lenght) {
    return false;
  }
  const map = {};
  const secondMap = {}

  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      if (map[s[i]] !== t[i]) {
        return false;
      }
    } else {
      map[s[i]] = t[i];
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] in map) {
      if (map[t[i]] !== s[i]) {
        return false;
      }
    } else {
      map[t[i]] = s[i];
    }
  }
  return true;
};

console.log(isIsomorphic('badc', 'baba')); */
