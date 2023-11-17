import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
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
        <Button variant={"outline"} size="icon">
          <GithubIcon className="w-4 h-4" />
        </Button>
        <Button variant={"outline"} size="icon">
          <Image
            width={10}
            height={10}
            src="/google.svg"
            alt="google"
            className="w-6 h-6"
          />
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
