const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

const data = require("./data.json");

function findCity(theCity) {
    const location = data.find((city) => city.city_name.toLowerCase() === theCity.toLowerCase());
    return location;
}

app.get("/", (request, response) => {
    response.json("hi");
});

app.get("/weather", (request, response) => {
    let dataToReturn = data;

    if (request.query.city) {
        dataToReturn = findCity(request.query.city);
    }
    response.json(dataToReturn);
});

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
