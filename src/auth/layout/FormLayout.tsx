import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";
import { LockKeyhole } from "lucide-react";
import { Outlet } from "react-router-dom";

export const FormLayout = () => {
  return (
    <Card className="w-full border-none sm:w-3/4">
      <CardHeader className="flex flex-col justify-center items-center">
        <LockKeyhole size={48} />
      </CardHeader>
      <CardContent>
        <Outlet />
      </CardContent>
    </Card>
  );
};
