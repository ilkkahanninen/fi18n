export type PluralForm1 = (n: number) => 0;
export type PluralForm2 = (n: number) => 0 | 1;
export type PluralForm3 = (n: number) => 0 | 1 | 2;
export type PluralForm4 = (n: number) => 0 | 1 | 2 | 3;
export type PluralForm5 = (n: number) => 0 | 1 | 2 | 3 | 4;
export type PluralForm6 = (n: number) => 0 | 1 | 2 | 3 | 4 | 5;

export type PluralRule = PluralForm6;

export type LanguagePluralRuleMap = { [key: string]: PluralRule };
