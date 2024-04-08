import Tiptap from '@/components/rich-text-editor/TextEditor'
import Sidebar from '@/components/dashboard-ui/Sidebar';
const page = () => {
   
  return (
    <div className=" md:grid h-[92vh] grid-cols-4">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="flex flex-col  items-center w-full col-span-3" >
        <h1 className="md:prose-xl font-light underline text-color mb-10">Ajouter un Blog</h1>
        <Tiptap />
      </div>
    </div>
  );
}

export default page