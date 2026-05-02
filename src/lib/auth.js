import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// Add a check to ensure MONGODB_URI is defined
if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in .env");
}

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();
const db = client.db("MoonLitLibrary");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: { 
    enabled: true, 
  },
  socialProviders:{
    google:{
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }
  }
});