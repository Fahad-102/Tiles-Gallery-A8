"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();

  const handleGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error("Google login failed");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await authClient.login.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error("Login failed");
      return;
    }

    toast.success("Login Successful");
    router.push("/");
  };

  return (
    <Card className="border-2 max-w-sm mx-auto mt-10 mb-10">
      <Form
        className="flex w-full flex-col gap-4 mx-auto p-7"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Must contain uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Must contain number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <FieldError />
        </TextField>

        <div className="flex justify-center gap-4 mt-5">
          <Button type="submit">
            <Check />
            Login
          </Button>

          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>

      <div className="flex justify-center items-center gap-2 my-4">
        <Separator className="w-20" />
        <p>OR</p>
        <Separator className="w-20" />
      </div>

      <div className="px-7 pb-7">
        <Button
          className="w-full"
          variant="outline"
          onClick={handleGoogle}
        >
          <GrGoogle />
          Login With Google
        </Button>
      </div>
    </Card>
  );
};

export default LoginPage;