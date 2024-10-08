import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import the models

import { authConfig } from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      profile(profile) {
        return profile;
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return token;
    },
    async signIn({ user, account }) {
      //   check if the email equals the admin email
    },
    async session({ session, token }) {
      //  pass on something to the session
      return session;
    },
  },
});
