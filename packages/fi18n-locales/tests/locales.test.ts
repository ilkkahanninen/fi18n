import test from "tape";
import { getPluralRule } from "../src";
import { pluralRule1, pluralRule0 } from "../src/pluralRule";

test("Returns correct locales for Finnish", t => {
  const rule = getPluralRule("fi-FI");
  t.equal(rule, pluralRule1);
  t.end();
});

test("Returns correct locales for French", t => {
  const rule = getPluralRule("zh");
  t.equal(rule, pluralRule0);
  t.end();
});
