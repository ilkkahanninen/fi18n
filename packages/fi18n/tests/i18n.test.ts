import test from "tape";
import { i18n } from "../src";

const translations = {
  "Hello world!": "Hei vaan, maailma!",
  "I am $name": "Minä olen $name",
  "%count files": ["%count tiedosto", "%count tiedostoa"],
  "%count cars": "%count autoa",
  "translation missing": "",
  "%count giraffes": ["%count kirahvi"],
  "%count dogs": ["", "%count koiraa"],
  "$a is $b": "$a on $b"
};

test("Translation function works", t => {
  const T = i18n("fi", translations);

  t.equals(T("Hello world!"), translations["Hello world!"]);
  t.equals(T("I am $name", { name: "Ilkka" }), "Minä olen Ilkka");
  t.equals(T("translation missing"), "translation missing");
  t.equals(T("$a is $b", { a: "Maailma", b: "pieni" }), "Maailma on pieni");

  t.equals(T("%count files", { count: 1 }), "1 tiedosto");
  t.equals(T("%count files", { count: 2 }), "2 tiedostoa");
  t.equals(T("%count cars", { count: 1 }), "1 autoa");
  t.equals(T("%count giraffes", { count: 3 }), "3 kirahvi");
  t.equals(T("%count dogs", { count: 1 }), "1 dogs");
  t.equals(T("%count dogs", { count: 3 }), "3 koiraa");

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
