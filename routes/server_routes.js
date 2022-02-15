const server_controller = require("../controllers/server_controllers")
const auth = require("../authentication/token_verification");
const request = require("request");
module.exports = (app) => {
    app.post("/api/register", async(req, res) => {
        try {
            let response = await server_controller.register(req.body);
            res.json(response);
        } catch (error) {
            res.json({ message: error.message });
        }
    });
    app.post("/api/login", async(req, res) => {
        try {
            let response = await server_controller.login(req.body);
            res.json(response);
        } catch (error) {
            res.json({ message: error.message });
        }
    });
    app.post("/api/add", auth, async(req, res) => {
        try {
            let response = await server_controller.add_quote(req.body);
            res.json(response);
        } catch (error) {
            res.json({ message: error.message });
        }
    });

    app.post("/api/openApi", async(req, res) => {
        try {
            // let response = await server_controller.callOpenApi(req.body);
            const cityName = res.body.state;
            const api_url = "https://api.covidtracking.com/v1/states/" + cityName + "/current.json";
            const test = await request(api_url, function(err, res, body) {
                if (err) {
                    return { success: false, message: err.message };
                } else {
                    let covidJSON = JSON.parse(body);
                    console.log(covidJSON);
                    let state = covidJSON.state,
                        date = covidJSON.date;
                    return { "state": state, "date": date }
                    // res.send({"state": state, "date": date});
                }
            });
            return res.json(test)
        } catch (error) {
            res.json({ message: error.message });
        }
    });

    app.put("/api/update/", auth, async(req, res) => {
        try {
            const payloadData = {
                message: req.body.message,
                name: "darth Wader",
            }
            let response = await server_controller.update_quote(payloadData);
            res.json(response);
        } catch (error) {
            res.json({ message: error.message });
        }
    });

    app.delete("/api/delete", auth, async(req, res) => {
        try {
            let response = await server_controller.delete_quote(req.body.id);
            res.json(response);
        } catch (error) {
            res.json({ message: error.message });
        }
    });
};