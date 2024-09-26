// services/scanService.js
const axios = require('axios');

const scanWebsite = async (url) => {
  const zapUrl = `http://localhost:8080/JSON/ascan/action/scan/?url=${encodeURIComponent(url)}`;
  const response = await axios.get(zapUrl);
  return response.data;
};

const getScanResults = async (scanId) => {
  const zapUrl = `http://localhost:8080/JSON/ascan/view/scanProgress/?scanId=${scanId}`;
  const response = await axios.get(zapUrl);
  return response.data;
};

module.exports = { scanWebsite, getScanResults };
