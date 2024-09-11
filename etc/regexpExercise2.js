const jaum = [
  12593, 12594, 12595, 12596, 12597, 12598, 12599, 12600, 12601, 12602, 12603,
  12604, 12605, 12606, 12607, 12608, 12609, 12610, 12611, 12612, 12613, 12614,
  12615, 12616, 12617, 12618, 12619, 12620, 12621, 12622,
];
const jongsung = [48, 49, 51, 54, 55, 56, 76, 77, 78, 82, 108, 109, 110, 114];
const isEndJaum = (txt) => {
  const check = txt[txt.length - 1].charCodeAt();
  if (44032 <= check && check <= 55203 && (check - 44032) % 28 !== 0)
    return true;
  if (jongsung.includes(check)) return true;
  if (jaum.includes(check)) return true;
  return false;
};


const jaum = [
    12593, 12594, 12595, 12596, 12597, 12598, 12599, 12600, 12601, 12602, 12603,
    12604, 12605, 12606, 12607, 12608, 12609, 12610, 12611, 12612, 12613, 12614,
    12615, 12616, 12617, 12618, 12619, 12620, 12621, 12622,
  ];
  const jongsung = [48, 49, 51, 54, 55, 56, 76, 77, 78, 82, 108, 109, 110, 114];
  const isEndJaum = (txt) => {
    const check = txt[txt.length - 1].charCodeAt();
    if (44032 <= check && check <= 55203 && (check - 44032) % 28 !== 0)
      return true;
    if (jongsung.includes(check)) return true;
    if (jaum.includes(check)) return true;
    return false;
  };

const iga = () => \


-
[a-z]
(a-z) = 'a-z'