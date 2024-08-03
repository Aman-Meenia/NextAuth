import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-400">
        <Card className="w-1/3 bg-slate-100">
          <form>
            <CardHeader>
              <CardTitle className="text-2xl flex justify-center">
                Login Page
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="text-md">
                  Username
                </label>
                <Input type="text" placeholder="username" />
                <label htmlFor="password" className="text-md">
                  Password
                </label>
                <Input type="password" placeholder="password" />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col justify-center items-center w-full gap-1">
                <Button variant="default" className="w-1/2" type="submit">
                  Login
                </Button>
                <span className="text-lg">or</span>

                <Button variant="default" className="w-1/2">
                  Login with Google
                </Button>

                <span>
                  Dont have an account?
                  <Link href="/signup" className="text-blue-500">
                    Sign up{" "}
                  </Link>
                </span>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
