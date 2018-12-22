import {
  PluralForm1,
  PluralForm2,
  PluralForm3,
  PluralForm4,
  PluralForm5,
  PluralForm6
} from "./typings";

// Plural rules inherited from https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals

const endsIn = (digit: number, n: number): boolean => n % 10 === digit;
const inRange = (from: number, to: number, n: number): boolean =>
  n >= from && n <= to;

// Asian (Chinese, Japanese, Korean)
// Persian
// Turkic/Altaic (Turkish)
// Thai
// Lao
export const pluralRule0: PluralForm1 = () => 0;

// Germanic (Danish, Dutch, English, Faroese, Frisian, German, Norwegian, Swedish)
// Finno-Ugric (Estonian, Finnish, Hungarian)
// Language isolate (Basque)
// Latin/Greek (Greek)
// Semitic (Hebrew)
// Romanic (Italian, Portuguese, Spanish, Catalan)
// Vietnamese
export const pluralRule1: PluralForm2 = n => (n === 1 ? 0 : 1);

// Romanic (French, Brazilian Portuguese)
// Lingala
export const pluralRule2: PluralForm2 = n => (n === 0 || n === 1 ? 0 : 1);

// Baltic (Latvian, Latgalian)
export const pluralRule3: PluralForm3 = n => {
  if (endsIn(0, n)) {
    return 0;
  }
  if (n !== 11 && endsIn(1, n)) {
    return 1;
  }
  return 2;
};

// Celtic (Scottish Gaelic)
export const pluralRule4: PluralForm4 = n => {
  if (n === 1 || n === 11) {
    return 0;
  }
  if (n === 2 || n === 12) {
    return 1;
  }
  if (inRange(3, 10, n) || inRange(13, 19, n)) {
    return 2;
  }
  return 3;
};

// Romanic (Romanian)
export const pluralRule5: PluralForm3 = n => {
  if (n === 1) {
    return 0;
  }
  if (n === 0 || inRange(1, 19, n % 100)) {
    return 1;
  }
  return 2;
};

// Baltic (Lithuanian)
export const pluralRule6: PluralForm3 = n => {
  if (endsIn(0, n) || inRange(11, 19, n % 100)) {
    return 1;
  }
  if (n !== 11 && endsIn(1, n)) {
    return 0;
  }
  return 2;
};

// Slavic (Belarusian, Bosnian, Croatian, Serbian, Russian, Ukrainian)
export const pluralRule7: PluralForm3 = n => {
  const e = n % 100;
  if (e !== 11 && endsIn(1, n)) {
    return 0;
  }
  if (!inRange(12, 14, e) && inRange(2, 4, n % 10)) {
    return 1;
  }
  return 2;
};

// Slavic (Slovak, Czech)
export const pluralRule8: PluralForm3 = n => {
  if (n === 1) {
    return 0;
  }
  if (inRange(2, 4, n)) {
    return 1;
  }
  return 2;
};

// Slavic (Polish)
export const pluralRule9: PluralForm3 = n => {
  if (n === 1) {
    return 0;
  }
  if (!inRange(12, 14, n) && inRange(2, 4, n % 10)) {
    return 1;
  }
  return 2;
};

// Slavic (Slovenian, Sorbian)
export const pluralRule10: PluralForm4 = n => {
  const e = n % 100;
  if (e === 1) {
    return 0;
  }
  if (e === 2) {
    return 1;
  }
  if (inRange(3, 4, e)) {
    return 2;
  }
  return 3;
};

// Celtic (Irish Gaelic)
export const pluralRule11: PluralForm5 = n => {
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  if (inRange(3, 6, n)) {
    return 2;
  }
  if (inRange(7, 10, n)) {
    return 3;
  }
  return 4;
};

// Semitic (Arabic)
export const pluralRule12: PluralForm6 = n => {
  if (n === 0) {
    return 5;
  }
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  if (inRange(3, 10, n % 100)) {
    return 2;
  }
  if (inRange(0, 2, n % 100)) {
    return 4;
  }
  return 3;
};

// Semitic (Maltese)
export const pluralRule13: PluralForm4 = n => {
  if (n === 1) {
    return 0;
  }
  const e = n % 100;
  if (n === 0 || inRange(1, 10, e)) {
    return 1;
  }
  if (inRange(11, 19, e)) {
    return 2;
  }
  return 3;
};

// Plural rule 14 is unused

// Icelandic, Macedonian
export const pluralRule15: PluralForm2 = n =>
  n !== 11 && endsIn(1, n) ? 0 : 1;

// Celtic (Breton)
export const pluralRule16: PluralForm5 = n => {
  const lastDigit = n % 10;
  if (n !== 11 && n !== 71 && n !== 91 && lastDigit === 1) {
    return 0;
  }
  if (n !== 12 && n !== 72 && n !== 92 && lastDigit === 2) {
    return 1;
  }
  if (
    (lastDigit === 3 || lastDigit === 4 || lastDigit === 9) &&
    n !== 13 &&
    n !== 14 &&
    n !== 19 &&
    n !== 73 &&
    n !== 74 &&
    n !== 79 &&
    n !== 93 &&
    n !== 94 &&
    n !== 99
  ) {
    return 2;
  }
  if (n !== 0 && n % 1000000 === 0) {
    return 3;
  }
  return 4;
};

// Ecuador indigenous languages (Shuar)
export const pluralRule17: PluralForm2 = n => (n === 0 ? 0 : 1);

// Welsh
export const pluralRule18: PluralForm6 = n => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (n === 3) {
    return 3;
  }
  if (n === 6) {
    return 4;
  }
  return 5;
};
