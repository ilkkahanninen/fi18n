import test from "tape";
import { initI18n } from "../src";

const translations = {
  "Hello world!": "Hei vaan, maailma!",
  "I am $name": "Minä olen $name",
  "%count files": ["%count tiedosto", "%count tiedostoa"]
};

test("Translation function works", t => {
  const T = initI18n("fi", translations);

  t.equals(T("Hello world!"), translations["Hello world!"]);
  t.equals(T("I am $name", { name: "Ilkka" }), "Minä olen Ilkka");
  t.equals(T("%count files", { count: 1 }), "1 tiedosto");
  t.equals(T("%count files", { count: 2 }), "2 tiedostoa");

  t.end();
});
