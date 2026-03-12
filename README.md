# ZIPCODE INFORMATION MICROSERVICE

This microservice provides geographical, population, and mail information about the zipcode provided 

## What it does

- `GET /:zipcode` returns information for provided zipcode
- Incorrect length zipcodes return `400` with `{error: "Invalid length for zipcode"}`
- Zipcodes with non-digit characters return `400` with `{error: "Zipcodes must only contain digits"}`

## how to call

Put the zipcode as the parameter in the GET request and the information will be sent as a response in JSON. This app is current hosted on PORT 5999

### example:
GET http://localhost:5999/63119 HTTP/1.1
content-type: application/json

**Response**
```json
{
  "links": {
    "self": "https://global.metadapi.com/zipc/v1/zipcodes/63119"
  },
  "meta": {
    "count": 1
  },
  "data": {
    "zipCode": "63119",
    "uspsMainCityKey": "W17799",
    "uspsMainCityName": "SAINT LOUIS",
    "titleCaseCityName": "Saint Louis",
    "zipClassificationCode": "N",
    "zipClassificationDesc": "Non-Unique Zip",
    "uspsFacilityCode": "P",
    "uspsFacilityName": "Post Office",
    "uspsCityMailingInd": true,
    "uspsDeliveryCode": "Y",
    "uspsDeliveryDesc": "Office Has City-Delivery Carrier Routes",
    "uspsCarrierRouteSortCode": "D",
    "uspsCarrierRouteRateSortDesc": "Carrier Route. Sortation/Rates. Do Not Apply-Merging Not Permitted",
    "uniqueZipNameInd": false,
    "uspsFinanceNumber": "287140",
    "stateCode": "MO",
    "stateName": "Missouri",
    "stateFipsCode": "29",
    "stateAbbr": "Mo.",
    "countyFipsCode": "189",
    "uspsCountyName": "SAINT LOUIS",
    "titleCaseCountyName": "Saint Louis",
    "latitude": 38.588467,
    "longitude": -90.35135,
    "landAreaMi2": 8.411,
    "waterAreaMi2": 0,
    "landAreaKm2": 21.784225,
    "waterAreaKm2": 0,
    "divisionCode": "4",
    "divisionName": "West North Central Division",
    "regionCode": "2",
    "regionName": "Midwest Region",
    "msaCode": "41180",
    "msaName": "St. Louis, MO-IL Metro Area",
    "cityAliases": [
      {
        "uspsCityKey": "W1B857",
        "uspsCityName": "WEBSTER GROVES",
        "titleCaseCityName": "Webster Groves",
        "uspsCityAbbr": "WEBSTER GRVS",
        "uspsCityMailingInd": true,
        "uspsMainCityInd": false
      },
      {
        "uspsCityKey": "W17699",
        "uspsCityName": "ROCK HILL",
        "titleCaseCityName": "Rock Hill",
        "uspsCityAbbr": null,
        "uspsCityMailingInd": false,
        "uspsMainCityInd": false
      },
      {
        "uspsCityKey": "W17799",
        "uspsCityName": "SAINT LOUIS",
        "titleCaseCityName": "Saint Louis",
        "uspsCityAbbr": null,
        "uspsCityMailingInd": true,
        "uspsMainCityInd": true
      },
      {
        "uspsCityKey": "W17921",
        "uspsCityName": "SHREWSBURY",
        "titleCaseCityName": "Shrewsbury",
        "uspsCityAbbr": null,
        "uspsCityMailingInd": false,
        "uspsMainCityInd": false
      },
      {
        "uspsCityKey": "W18600",
        "uspsCityName": "WEBSTER GRVS",
        "titleCaseCityName": "Webster Grvs",
        "uspsCityAbbr": null,
        "uspsCityMailingInd": true,
        "uspsMainCityInd": false
      }
    ],
    "zipCodeStatistics": [
      {
        "year": 2000,
        "totalPopulation": 34416,
        "malePopulation": 15738,
        "femalePopulation": 18678
      },
      {
        "year": 2010,
        "totalPopulation": 33969,
        "malePopulation": 15868,
        "femalePopulation": 18101
      },
      {
        "year": 2020,
        "totalPopulation": 34793,
        "malePopulation": 16428,
        "femalePopulation": 18365
      }
    ]
  }
}
```