"use client";
import Input from "@/app/_components/generic/Input";
import Button from "@/app/_components/generic/Button";
import ListItem from "@/app/_components/generic/ListItem";

function Signup() {
  return (
    <div className="grid place-content-center min-h-screen">
      <div className="grid gap-4">
        <div className="grid gap-4 p-4">
          <Input
            placeholder="First Name"
            type="text"
          />
          <Input
            placeholder="Last Name"
            type="text"
          />
          <Input
            placeholder="Email"
            type="email"
          />
          <Input
            placeholder="Password"
            type="password"
          />
          <Button>Sign Up</Button>
          <div className="text-center">
            <ListItem>Already have an account? Login</ListItem>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
