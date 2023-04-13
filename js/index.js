/**
 * DOM variables
 */

const qtyElm = document.getElementById("qty");
qtyElm.value = "1";

// Length (Meter/Feet)
const mValElm = document.getElementById("m");
const ftValElm = document.getElementById("ft");

// Volume (Liters/Gallons)
const lValElm = document.getElementById("l");
const galValElm = document.getElementById("gal");

// Mass (Kilograms/Pounds)
const kgValElm = document.getElementById("kg");
const lbValElm = document.getElementById("lb");

// Convert Button
document.getElementById("convert-btn").addEventListener("click", function () {
  renderValues(qtyElm);
});

/**
 * (Element) -> undefined
 * Converts the amount provided by the user and writes the converted values on the screen.
 */
function renderValues(qtyElement) {
  const qty = Number(qtyElement.value);

  // Length (Meter/Feet)
  mValElm.innerHTML = `${qty} meters = ${converter(qty, "m", "ft")} feet`;
  ftValElm.innerHTML = `${qty} feet = ${converter(qty, "ft", "m")} meters`;

  // Volume (Liters/Gallons)
  lValElm.innerHTML = `${qty} liters = ${converter(qty, "l", "gal")} gallons`;
  galValElm.innerHTML = `${qty} gallons = ${converter(qty, "gal", "l")} liters`;

  // Mass (Kilograms/Pounds)
  kgValElm.innerHTML = `${qty} kilos = ${converter(qty, "kg", "lb")} pounds`;
  lbValElm.innerHTML = `${qty} pounds = ${converter(qty, "lb", "kg")} kilos`;
}

/**
 * (Number, String, String) -> String
 * Converts a number from one unit to another with precision to 3 decimal places
 */
function converter(num, from, to) {
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
  const result = k * num;
  return result.toFixed(3);
}
