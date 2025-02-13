const request = require("supertest");
const app = require("./app")

describe("", () => {

    afterAll("", () => {
        
    });

    test("the /cat endpoint responds with cat data when it receives a get request", async () => { 
        const response = await request(app).get("/cats");
      
        expect(response.body).toEqual({
          catsArray: ["Ragdoll", "Moggy", "Siamese"],
        });
    })
})

