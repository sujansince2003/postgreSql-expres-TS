import { Client } from "pg";
import dotenv from "dotenv"
// import app from "./app";
dotenv.config()
// Ensure the environment variable is correct
const pgClient = new Client({
    connectionString: process.env.POSTGRES_URL, // Use the correct variable name
});

async function connectDB() {
    try {
        // Connect to PostgreSQL
        await pgClient.connect();
        console.log("Connected to PostgreSQL");
        const { default: app } = await import("./app");
        app.listen(3000, () => {
            console.log(" Server is running on port 3000");
        })
    } catch (error) {
        console.error("❌ Database connection error:", error);
    }
}
connectDB();
export { pgClient }


