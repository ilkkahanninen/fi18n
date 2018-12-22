import { PluralRule } from "./typings";
import { languagePluralRuleMap } from "./locales";
import { pluralRule1 } from "./pluralRule";

export const getPluralRule = (languageCode: string): PluralRule | null => {
  const code = languageCode.toLowerCase();

  if (languagePluralRuleMap[code]) {
    return languagePluralRuleMap[code];
  }

  const [shortCode] = code.split("-");
  if (languagePluralRuleMap[shortCode]) {
    return languagePluralRuleMap[shortCode];
  }

  return null;
};

export const defaultPluralRule = pluralRule1;
