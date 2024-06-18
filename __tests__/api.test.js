const request = require("supertest");
const { app, server } = require("../index"); // Import both app and server

describe("API Endpoints", () => {
  afterAll(() => {
    // Close the server after tests
    server.close();
  });

  it("POST /api/check-sum should return success if sum is greater than threshold", async () => {
    const data = { numbers: [10, 20, 30], threshold: 50 };
    const res = await request(app).post("/api/check-sum").send(data);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Sum is greater than threshold");
    expect(res.body).toHaveProperty("sum", 60);
  });

  it("POST /api/check-sum should return failure if sum is not greater than threshold", async () => {
    const data = { numbers: [10, 20, 10], threshold: 50 };
    const res = await request(app).post("/api/check-sum").send(data);
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty(
      "message",
      "Sum is not greater than threshold"
    );
    expect(res.body).toHaveProperty("sum", 40);
  });
});
