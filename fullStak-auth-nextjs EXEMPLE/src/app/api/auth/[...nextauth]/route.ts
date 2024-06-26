import { Backend_URL } from "@/lib/Constants";
import { NextAuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(Backend_URL + "/auth/refresh", {
    method: "POST",
    headers: {
      authorization: `Refresh ${token.tokens.refresh}`,
    },
  });
  console.log("refreshed");

  const response = await res.json();

  return {
    ...token,
    tokens: response,
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) return null;
        const { username, password } = credentials;
        const res = await fetch(Backend_URL + "/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email: username,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status == 401) {
          console.log(res.statusText);

          return null;
        }
        const user = await res.json();
        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({token, user}) {
      if (user) return { ...token, ...user };

      if (new Date().getTime() < token.tokens.expiresIn){
        return token;
      }

      return await refreshToken(token);
    },

    async session({ token, session }) {
      session.profile = token.profile;
      session.tokens = token.tokens;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
