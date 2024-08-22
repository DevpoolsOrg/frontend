import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { LockKeyhole } from "lucide-react";
import React from "react";

interface UserFormLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const UserFormLayout = ({ children, title }: UserFormLayoutProps) => {
  return (
    <div className="h-full flex justify-center items-center ">
        <Card className="w-full m-2 sm:w-1/2">
          <CardHeader className="flex flex-col justify-center items-center">
            <LockKeyhole size={24} />
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="py-4">
            {children}
          </CardContent>
        </Card>
    </div>
      );
};
