
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {/* Inventory System Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Inventory System
      </h1>

      {/* Login Card */}
      <Card className="w-full max-w-sm bg-background">
        <CardHeader>
          <CardTitle className="text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Google Sign-In Button */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 cursor-pointer"
          >
            <FcGoogle className="w-5 h-5" />
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
