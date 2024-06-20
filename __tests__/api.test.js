const request = require("supertest");
const { app, server } = require("../index"); // Import both app and server

describe("API Endpoints", () => {
  afterAll(() => {
    // Close the server after tests
    server.close();
  });

  it("should return success if sum is greater than threshold (case 1)", async () => {
    const data = { numbers: [10, 20, 30], threshold: 50 };
    const res = await request(app).post("/api/check-sum").send(data);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Sum is greater than threshold");
    expect(res.body).toHaveProperty("sum", 60);
  });

  it("should return success if sum is greater than threshold (case 2)", async () => {
    const data = { numbers: [10, 20, 40], threshold: 50 };
    const res = await request(app).post("/api/check-sum").send(data);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Sum is greater than threshold");
    expect(res.body).toHaveProperty("sum", 70);
  });

  it("should return success if sum is greater than threshold (case 3)", async () => {
    const data = { numbers: [10, 20, 50], threshold: 50 };
    const res = await request(app).post("/api/check-sum").send(data);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Sum is greater than threshold");
    expect(res.body).toHaveProperty("sum", 80);
  });

  it("should return success if sum is greater than threshold (case 4)", async () => {
    const data = { numbers: [10, 20, 60], threshold: 50 };
    const res = await request(app).post("/api/check-sum").send(data);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Sum is greater than threshold");
    expect(res.body).toHaveProperty("sum", 90);
  });

  it("should return success if sum is greater than threshold (case 5)", async () => {
    const data = { numbers: [10, 20, 40], threshold: 50 };
    const res = await request(app).post("/api/check-sum").send(data);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Sum is greater than threshold");
    expect(res.body).toHaveProperty("sum", 70);
  });

  it("should return failure for non-numeric strings in numbers array", async () => {
    const data = { numbers: [10, "abc", 30], threshold: 50 };
    const res = await request(app).post("/api/check-sum").send(data);
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty(
      "message",
      "Sum is not greater than threshold"
    );
  });
});
