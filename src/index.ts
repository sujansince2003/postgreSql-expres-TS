import { Client } from "pg";
import dotenv from "dotenv"

dotenv.config()

// Ensure the environment variable is correct
const pgClient = new Client({
    connectionString: process.env.POSTGRES_URL, // Use the correct variable name
});

async function connectDB() {
    try {
        // Connect to PostgreSQL
        await pgClient.connect();
        console.log("✅ Connected to PostgreSQL");

        // Execute the query (make sure to use `await`)
        const response = await pgClient.query("SELECT * FROM users");

        // Log results
        console.log("📊 Query Result:", response.rows);

    } catch (error) {
        console.error("❌ Database connection error:", error);
    } finally {
        // Close connection
        await pgClient.end();
        console.log("🔌 Disconnected from PostgreSQL");
    }
}

connectDB();
