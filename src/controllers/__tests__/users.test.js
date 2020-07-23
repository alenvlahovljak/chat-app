//require neccesary modules
const app = require("../../app");
const request = require("supertest");

test("Should create new user", async () => {
	await request(app).post("/users").send({}).expect(404);
});
