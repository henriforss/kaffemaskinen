import { v4 as uuidv4 } from "uuid";

const URL =
  "https://tdrdxj2a5i.execute-api.eu-north-1.amazonaws.com/default/kaffe";

export const getData = async () => {
  const options = {
    method: "GET",
  };
  const response = await (await fetch(URL, options)).json();

  return response;
};

export const postData = async (coffeeObject) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      id: uuidv4(),
      coffeeName: coffeeObject.coffeeName,
      packageSize: coffeeObject.packageSize,
      packagePrice: coffeeObject.packagePrice,
      roast: coffeeObject.roast,
    }),
  };

  console.log("hei", coffeeObject.roast);

  const response = await (await fetch(URL, options)).json();

  console.log(response);
};

export const findData = async (searchString) => {
  const options = {
    method: "POST",
    body: searchString,
  };

  const response = await (await fetch(URL + "/search", options)).json();

  return response;
};
