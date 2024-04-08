import AddCollection from "@/components/dashboard-ui/AddCollection";
import Sidebar from "@/components/dashboard-ui/Sidebar";

const page = () => {
  return (
    <div className=" md:grid h-[92vh] grid-cols-4">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="flex justify-center col-span-3">
        <AddCollection />
      </div>
    </div>
  );
};

export default page;
