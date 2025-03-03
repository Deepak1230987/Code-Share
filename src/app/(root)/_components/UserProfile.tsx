"use client";
import { SignedOut, SignInButton } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import React from "react";

const UserProfile = () => {
  return (
    <>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Profile"
            labelIcon={<User className="size-4" />}
            href="/profile"
          />
        </UserButton.MenuItems>
      </UserButton>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
};

export default UserProfile;
