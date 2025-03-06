require('dotenv').config();

module.exports = {
    API_KEY: process.env.MISTRAL_API_KEY,
    MODEL: "codestral-latest",
    TEMPERATURE: 0,
    TOP_P: 1
};
