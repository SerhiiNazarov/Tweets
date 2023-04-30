import axios from "axios";
axios.defaults.baseURL = "https://6449758fb88a78a8f00877ba.mockapi.io/users";

const getAllUsers = async () => {
  try {
    const { data } = await axios.get();

    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export default getAllUsers;
