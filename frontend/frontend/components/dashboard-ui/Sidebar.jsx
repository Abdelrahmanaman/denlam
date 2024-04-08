import Link from "next/link"

const Sidebar = () => {
  return (
    <aside className="h-full border-1 border-primary text-black md:p-3 border-r-2 text-base">
      <h1 className="md:text-3xl font-semibold">Dashboard</h1>
      <div className="flex flex-col gap-2 md:mt-10">
        <Link className="border-b-2 border-primary px-3 py-3 text-lg font-medium hover:bg-primary hover:rounded-md hover:text-black block transition-all duration-200" href={"/dashboard"}>
          Add a collection
        </Link>
        <Link className="border-b-2 border-primary px-3 md:py-3 text-lg  hover:bg-primary hover:rounded-md hover:text-black block transition-all duration-200 font-medium" href={"/dashboard/add-blog"}>
          Add a blog
        </Link>
        <Link className="border-b-2 border-primary px-3 md:py-3 text-lg  hover:bg-primary hover:rounded-md hover:text-black block transition-all duration-200 font-medium" href={"/dashboard/edit-collection"}>
          Edit a collection
        </Link>
        <Link className="border-b-2 border-primary px-3 md:py-3 text-lg  hover:bg-primary hover:rounded-md hover:text-black block transition-all duration-200 font-medium" href={"/dashboard/edit-collection"}>
          Edit a collection
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar