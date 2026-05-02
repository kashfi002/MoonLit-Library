import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// No 'await' here. Just define the client.
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("MoonLitLibrary");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client, // The adapter connects the client for you
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: { 
    enabled: true, 
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }
  }
});