## Testing an Express Endpoint:

## Objective:
1. Consolidate your knowledge of asynchronous testing.
1. Learn how to write endpoint tests. 

## Introduction:
In the pill prior to this one, you learnt about writing tests for asynchronous functions. Now, we will see **how we can also write tests for server endpoints.** When writing a server's endpoint, you want to make sure it behaves as expected, so testing your code is really important. So far, **we have done that using Postman** to make sure the correct JSON objects were sent as part of the response, but now we will go one step further and write automated tests you can run easily as and when needed. 

## Demonstration:
When we test endpoints, we typically want to check that the response we are getting comes with: 
- The correct status code (200, 201, 404, etc. depending on the scenario tested). 
- The expected data, in the correct format, or the expected error if we're testing an error scenario. 

As such, **we usually test "good" scenarios**, where we mimic a request correctly sent to the server, **and "bad" scenarios, where errors are made along the way**, to make sure they are all handled appropriately. 

In order to write endpoint tests, we are going to use a new tool with Jest, called **Supertest**. Supertest is a JavaScript library that lets you send HTTP requests from your test environment, and then work with the response from the server to write the test cases.

Let's TDD the following endpoint on my cat server: 

| Endpoint    | Method   | Response Data   |
| ------------| ---------|----------------------------------------------------|
| /myCat      | GET      | {"name": "Ginger"} |

[VIDEO HERE]

endpoint:
```
app.get("/myCat", (req, res) => {
  res.send({name: "Ginger"});
})
```

test:
```
const request = require("supertest");
const app = require("./app.js");

describe("/myCat", () => {
  test("GET - it responds with the appropriate cat data", () => {
    const response = await request(app).get("/myCat");

    expect(response.body).toEqual({name: "Ginger"});
    expect(response.status).toBe(200);
  })
})

```

## Exercise:
TDD the following new endpoint on your own Express server: 

| Endpoint    | Method   | Response Data   |
| ------------| ---------|----------------------------------------------------|
| /continents | GET      | {"continents": ["Asia", "Africa", "Europe", "North America", "South America", "Antarctica", "Australia"]} |


## Extension Challenge: 
If you feel confident with the content in this section so far, you can try to tackle this challenge! This is not complusory though, feel free to skip this section if you think it might be too much at this point in time. You can always revisit it at a later date. 

Look for the Route Parameters [section in the Express docs](https://expressjs.com/en/guide/routing.html), and try to figure out how to implement this modified `/countries` endpoint. 

**Hint:** *It should be separate from the simple `/countries` endpoint implemented in previous exercises.*

| Endpoint    | Method   | Response Data   |
|-------------|----------|-----------------|
| /countries/:id  | GET      | should respond with the country with the corresponding id  |

Your endpoint should use the following data:

```
const countriesList = [
        { country: "France", language: "French", id: "1" }, 
        { country: "Spain", language: "Spain", id: 2}
    ]
```

And pick the relevant country to respond with based on the :id in the route parameters. 

<details>
<summary>Help me get started</summary>
<br>

```
app.get("/countries/:id", (req, res) => {
    //Pick the relevant country in this array based on the id:
    const countriesList = [
        { country: "France", language: "French", id: "1" }, 
        {country: "Spain", language: "Spain", id: 2}
        ]
})
```

</details>
