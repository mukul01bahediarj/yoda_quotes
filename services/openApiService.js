const request = require("request");

module.exports.callApi = async (body) =>{
        const cityName = body.state;
        const api_url = "https://api.covidtracking.com/v1/states/" + cityName + "/current.json";
    await request(api_url, function (err, res, body) {
        if (err) {
            return {success: false, message: err.message};
        } else {
            let covidJSON = JSON.parse(body);
            console.log(covidJSON);
            let state = covidJSON.state,
                date = covidJSON.date
            return {"state": state, "date": date}
        }
    });
};

