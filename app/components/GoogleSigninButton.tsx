"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

function GoogleSigninButton() {
  return (
    <Button variant={"outline"} size="icon">
      <Image
        onClick={() => signIn("google")}
        width={10}
        height={10}
        src="/google.svg"
        alt="google"
        className="w-6 h-6"
      />
    </Button>
  );
}

export default GoogleSigninButton;
