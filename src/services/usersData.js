import axios from 'axios';
axios.defaults.baseURL =
  'https://node-tweets-be-project.onrender.com/api/users';

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
