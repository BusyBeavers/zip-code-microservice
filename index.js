import express from 'express';
import cors from 'cors';

const PORT = 5999;
const API_KEY = "31c2b34a1a1d4369bea81e13f5ef4613"

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

app.get('/:zipcode', async (req, res) => {

    const zipcode = req.params.zipcode;

    if (zipcode.length !== 5){
        return res.status(400).json({error: "Invalid length for zipcode"})
    }

    const confirmNumbers = /^\d+$/;
    if (!confirmNumbers.test(zipcode)){
        return res.status(400).json({error: "Zipcodes must only contain digits"})
    }

    const url = `https://global.metadapi.com/zipc/v1/zipcodes/${zipcode}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Ocp-Apim-Subscription-Key': API_KEY
                }
            }   
        )

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({
                error: "Failed to fetch zipcode information",
                response: data})
        }
        
        return res.status(200).json(data);
    }
    catch (err) {
        console.error("Error calling zipcode API");
        return res.status(500).json({error: "error calling zipcode API"})
    }
})