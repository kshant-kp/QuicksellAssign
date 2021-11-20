import axios from "axios";

export async function PutVal(prop) {
  let response;
  console.log(prop);
  await axios
    .put(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
      prop
    )
    .then((res) => (response = res));
  return response.data.json;
}

export async function GetVal() {
  let response;
  await axios
    .get(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/kshant.json"
    )
    .then((res) => (response = res));
  return response.data;
}
