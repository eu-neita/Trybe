const fetch = require('node-fetch');

const API = "https://registry.npmjs.org/";


const getPackege = async (name) => {
  let response;
  try {
    response = await fetch(`${API}/${name}`);
  } catch (error) {
    console.log(error);
    return false;
  }
  if(!response.ok) return false;
  const data = await response.json();
  return data;
};

module.exports = { getPackege };
