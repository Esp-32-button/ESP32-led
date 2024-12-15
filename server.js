const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let ledState = "OFF";

// Endpoint to get LED state
app.get('/led-state', (req, res) => {
    res.send(ledState);
});

// Endpoint to set LED state
app.post('/led-state', (req, res) => {
    const { state } = req.body;
    if (state === "ON" || state === "OFF") {
        ledState = state;
        res.status(200).send({ message: `LED state set to ${state}` });
    } else {
        res.status(400).send({ message: "Invalid state" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
