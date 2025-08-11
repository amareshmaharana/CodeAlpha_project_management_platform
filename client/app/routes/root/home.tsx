import React from "react";
import type { Route } from "../../+types/root";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nestro - Home" },
    {
      name: "description",
      content:
        "Nestro is a project management tool that helps you manage your projects and tasks.",
    },
  ];
}

const Homepage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center gap-4">
      <Link to="/sign-in">
        <Button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Login
        </Button>
      </Link>
      <Link to="/sign-up">
        <Button
          variant="outline"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default Homepage;
