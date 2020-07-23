//require neccesary modules
const fs = require("fs");
const path = require("path");
const app = require("../../app");
const request = require("supertest");

//reqire models and db's populate method
const { populateDB } = require("../../fixtures/db/users");

//require necessary model
const User = require("../../models/User");

//delete db before running each test
beforeEach(populateDB);

//delete avatars
afterAll(() => {
	const dir = path.join(__dirname, "../../../public/storage/avatars");
	fs.readdir(dir, (err, files) => {
		if (err) throw err;
		for (let file of files) {
			fs.unlink(path.join(dir, file), (err) => {
				if (err) throw err;
			});
		}
	});
});

test("Should create new user", async () => {
	await request(app)
		.post("/users")
		.send({
			location: "Moscow"
		})
		.expect(201);
});
