import axios from "axios";

const url = "https://pcon-kalyan.herokuapp.com";

export const getUserByEmail = async (email) => {
  try {
    const data = await axios.get(`${url}/user`, { email });
    console.log(data);

    return data;
  } catch (err) {
    console.error(err);
  }
};
