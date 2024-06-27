import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import { env } from "process";

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(env.BACK_URL + "/auth/refresh", {
    method: "POST",
    headers: {
      authorization: `Refresh ${token.tokens.refresh}`,
    },
  });

  const response = await res.json();

  return {
    ...token,
    tokens: response,
  };
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(
        credentials: any,
        req: any
      ) {
        const res = await fetch(env.BACK_URL + "/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        if (res.status === 401) {
          console.log(res.statusText);
          return null;
        }

        const user = await res.json();
        if (user && res.ok) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        return {
          ...token,
          ...user,
        }
      }

      if (new Date().getTime() < token.tokens.expiresIn){
        return token;
      }

      return await refreshToken(token);

    },

    async session({token, session}) {

      session.profile = token.profile;
      session.tokens = token.tokens;

      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, nextAuthOptions };
