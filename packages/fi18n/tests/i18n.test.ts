import test from "tape";
import { i18n } from "../src";

const translations = {
  "Hello world!": "Hei vaan, maailma!",
  "I am $name": "Minä olen $name",
  "%count files": ["%count tiedosto", "%count tiedostoa"]
};

test("Translation function works", t => {
  const T = i18n("fi", translations);

  t.equals(T("Hello world!"), translations["Hello world!"]);
  t.equals(T("I am $name", { name: "Ilkka" }), "Minä olen Ilkka");
  t.equals(T("%count files", { count: 1 }), "1 tiedosto");
  t.equals(T("%count files", { count: 2 }), "2 tiedostoa");

  t.end();
});

test("Curried i18n function works", t => {
  const getT = i18n("fi");
  const T = getT(translations);

  t.equals(T("Hello world!"), translations["Hello world!"]);
  t.equals(T("I am $name", { name: "Ilkka" }), "Minä olen Ilkka");
  t.equals(T("%count files", { count: 1 }), "1 tiedosto");
  t.equals(T("%count files", { count: 2 }), "2 tiedostoa");

  t.end();
});
