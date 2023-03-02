/**
 * Number, String, String -> String
 * Converts a number from one unit to another with precision to 3 decimal places
 * Source -> Target
 * 1 meter = 3.280839895 feet
 * 1 liter = 0.264 gallon
 * 1 kilogram = 2.204 pound
 */

QUnit.module("Metric/Imperial Unit Conversion Tests");
QUnit.test("unitConverter", function (assert) {
  assert.deepEqual(unitConverter(20, "m", "ft"), "65.617");
  assert.deepEqual(unitConverter(20, "ft", "m"), "6.096");
  assert.deepEqual(unitConverter(20, "l", "gal"), "5.283");
  assert.deepEqual(unitConverter(20, "gal", "l"), "75.708");
  assert.deepEqual(unitConverter(20, "kg", "lb"), "44.092");
  assert.deepEqual(unitConverter(20, "lb", "kg"), "9.072");
});

// stub
// function unitConverter(n, from, to) {
//   return 0;
// }

function unitConverter(n, from, to) {
  let k = 0;
  if (from === "m" && to === "ft") {
    k = 3.280839895;
  } else if (from === "ft" && to === "m") {
    k = 1 / 3.280839895;
  } else if (from === "l" && to === "gal") {
    k = 0.2641720524;
  } else if (from === "gal" && to === "l") {
    k = 1 / 0.2641720524;
  } else if (from === "kg" && to === "lb") {
    k = 2.20462262185;
  } else {
    k = 1 / 2.20462262185;
  }
  const result = n * k;
  return result.toFixed(3);
}
