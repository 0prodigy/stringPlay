function main(input) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(camelCase(input));
  console.log(snakeCase(input));
  console.log(kebabCase(input));

 /* if (changeCase == "camelCase") {
    return camelCase(string);
  } else if (changeCase == "snake_case") {
    return snakeCase(string);
  } else if (changeCase == "hyphen-case") {
    return kebabCase(string);
  } else {
    return "Please select valid case";
  } */

  function camelCase(params) {
    let output = covertCase(params, "lower").split("");
    for (let i = 0; i < output.length; i++) {
      if (output[i] == " ") {
        output[i + 1] = upperCase(output[i + 1]);
      }
    }
    output = output.join("");
    output = replace(output, " ", "");
    return output;
  }
  function snakeCase(params) {
    let output = covertCase(params, "lower");
    output = replace(output, " ", "_");
    return output;
  }
  function kebabCase(params) {
    let output = covertCase(params, "lower");
    output = replace(output, " ", "-");
    return output;
  }

  function lowerCase(params) {
    let output = params;
    for (let i = 0; i < lower.length; i++) {
      if (params == upper[i]) {
        return (output = lower[i]);
      }
    }
    return output;
  }
  function upperCase(params) {
    let output = params;
    for (let i = 0; i < lower.length; i++) {
      if (params == lower[i]) {
        return (output = upper[i]);
      }
    }
    return output;
  }
  function covertCase(params, to) {
    let output = "";
    for (let i = 0; i < params.length; i++) {
      if (to == "lower") {
        output += lowerCase(params[i]);
      } else if (to == "upper") {
        output += upperCase(params[i]);
      }
    }
    return output;
  }
  function replace(params, from, to) {
    let output = "";
    for (let i = 0; i < params.length; i++) {
      if (params[i] == from) {
        if (params[i + 1] == from) {
          output += "";
        } else {
          output += to;
        }
      } else {
        output += params[i];
      }
    }
    return output;
  }
  //   console.log(camelCase("this is something to be    changed"));
}
main("covert This LIne into all   Three Case");


