import { getPluralRule, defaultPluralRule } from "fi18n-locales";
import { TParameters, Translations, TFunction } from "./typings";
import { replace } from "./replace";

const parseNumericParamKey = (template: string): string | undefined => {
  const match = template.match(/.*%([\w_][\w\d_]*).*/);
  return match ? match[1] : undefined;
};

const ensureNumber = (n: string | number): number =>
  typeof n === "string" ? parseFloat(n) : n;

export function i18n<T extends Translations>(
  languageCode: string,
  translations: T
): TFunction<T>;

export function i18n<T extends Translations>(
  languageCode: string
): <U extends T>(translations: U) => TFunction<U>;

export function i18n<T extends Translations>(
  languageCode: string,
  translations?: T
) {
  const pluralRule = getPluralRule(languageCode) || defaultPluralRule;

  const createI18n = <U extends T>(translations: U) => (
    template: keyof U,
    parameters?: TParameters
  ) => {
    const tr = translations[template] || template;

    if (Array.isArray(tr)) {
      if (parameters) {
        const numberKey = parseNumericParamKey(template as string);
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

    return replace(tr as string, parameters);
  };

  return translations ? createI18n(translations) : createI18n;
}
