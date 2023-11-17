import GithubSigninButton from "@/app/components/GithubSigninButton";
import GoogleSigninButton from "@/app/components/GoogleSigninButton";
import { authOptions } from "@/app/utils/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignUp = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }
  return (
    <div
      className="
        mt-24
        md:mt-0
        md:max-w-sm
        md:px-14
      bg-black/80
        rounded
        py-10
        px-6
        
      "
    >
      <form className="w-full flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
        <div className="mt-5 space-y-4">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-gray-500 placeholder:text-xs w-full"
          />
          <Button
            type="submit"
            variant={"destructive"}
            className="w-full bg-[#e50914]"
          >
            Sign Up
          </Button>
        </div>
      </form>

      <div className="text-sm text-gray-500 mt-2">
        Already have an account?{" "}
        <Link className="text-white hover:underline" href={"/login"}>
          Log In
        </Link>
      </div>

      <div className="w-full flex justify-center items-center gap-x-3 mt-6">
        <GithubSigninButton />
        <GoogleSigninButton />
      </div>
    </div>
  );
};

export default SignUp;
