import test from "tape";
import { replace } from "../src/replace";

test("Replace $parameters with given values", t => {
  t.equal(
    replace("Hello, $a and $b!", { a: "Moon", b: "Sun" }),
    "Hello, Moon and Sun!"
  );
  t.end();
});

test("Replace %parameters with given values", t => {
  t.equal(replace("I am %age years old", { age: 35 }), "I am 35 years old");
  t.end();
});

test("Leave undefined parameters untouched", t => {
  t.equals(replace("$foo %bar"), "$foo %bar");
  t.end();
});
