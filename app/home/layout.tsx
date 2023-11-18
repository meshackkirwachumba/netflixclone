import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";

async function HomeLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-6 lg:px-8">{children}</main>
    </div>
  );
}

export default HomeLayout;
