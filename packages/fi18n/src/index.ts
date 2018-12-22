import { getPluralRule, defaultPluralRule } from "fi18n-locales";
import { TParameters, Translations } from "./typings";
import { replace } from "./replace";

const parseNumericParamKey = (template: string): string | undefined => {
  const match = template.match(/.*%([\w_][\w\d_]*).*/);
  return match ? match[1] : undefined;
};

const ensureNumber = (n: string | number): number =>
  typeof n === "string" ? parseFloat(n) : n;

export const initI18n = (languageCode: string, translations: Translations) => {
  const pluralRule = getPluralRule(languageCode) || defaultPluralRule;

  return (template: string, parameters?: TParameters) => {
    const tr = translations[template] || template;

    if (Array.isArray(tr)) {
      if (parameters) {
        const numberKey = parseNumericParamKey(template);
        if (numberKey) {
          const value = ensureNumber(parameters[numberKey]);
          if (value !== undefined) {
            const pluralTr = tr[pluralRule(value)];
            if (pluralTr) {
              return replace(pluralTr, parameters);
            }
          }
        }
      }

      return replace(tr[0], parameters);
    }

    return replace(tr, parameters);
  };
};
