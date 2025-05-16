import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      profile(raw) {
        // console.log(raw);
        return {
          email: raw.email,
          name: raw.name,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) {
        const name = user.name;
        const email = user.email as string;

        const existing = await prisma.user.findUnique({
          where: { email },
        });

        if (!existing) {
          await prisma.user.create({
            data: {
              email,
              name,
            },
          });
        }
      }

      return true;
    },
    async jwt({ user, token }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email as string },
        });

        token.id = dbUser?.id;
        token.email = dbUser?.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
