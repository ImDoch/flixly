import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

export const CustomHeader = () => {
  return (
    <header className="h-16 p-2 flex justify-between items-center border-b border-gray-300">
      <h1 className="text-2xl ">Flixly</h1>
      <Tabs
        defaultValue="account"
        className="w-100 flex justify-center items-center"
      >
        <TabsList className="bg-muted">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
      </Tabs>

      <div>
        <Button variant="outline" size="icon" className="rounded-full">
          <Search />
        </Button>
      </div>
    </header>
  );
};
