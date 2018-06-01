# Timestamp Microservice

#### User Stories

1. The API endpoint is GET [project_url]/api/timestamp/:date_string?
2. A date string is valid if can be successfully parsed by new Date(date_string).
    *  unix timestamp should be an integer specifying millicseconds. Date strings should be compliant with ISO-8601
3. If the date string is empty, the current timestamp is used.
4. If the date string is invalid, the api returns a JSON with the structure `{"error" : "Invalid Date" }`
5. If the date string is valid, return a JSON with the structure 
```
{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
```