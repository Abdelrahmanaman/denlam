"use client";
import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { Bold as BoldIcon, Heading1, Heading2, AlignLeft, AlignCenter, AlignRight, List } from "lucide-react";
import { useRouter } from "next/navigation";

const Tiptap = () => {
    const router = useRouter()
  const [form, setForm] = useState({
    content: "",
  });

  const editor = useEditor({
    extensions: [StarterKit, TextAlign],
    content: "<p>Hello World!</p>",
    onUpdate: ({ editor }) => {
      setForm((prev) => ({ ...prev, content: editor.getHTML() }));
    },
  });

  if (!editor) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/add-blog", {
      method: "POST",
      body: JSON.stringify(form.content),
    });
    if (response.ok) {
            editor.commands.setContent("");

    } else {
      console.error("Failed to add blog");
    }
  };

  return (
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-h-52 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
        <div className="toolbar mb-4 flex justify-center flex-wrap space-x-2 bg-gray-100 p-2 rounded-t-md">
          <button type="button" className="p-2 rounded-md bg-gray-200 hover:bg-gray-300" onClick={() => editor.chain().focus().toggleBold().run()}>
            <BoldIcon />
          </button>
          <button type="button" className="p-2 rounded-md bg-gray-200 hover:bg-gray-300" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
            <Heading1 />
          </button>
          <button type="button" className="p-2 rounded-md bg-gray-200 hover:bg-gray-300" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
            <Heading2 />
          </button>
          <button type="button" className="p-2 rounded-md bg-gray-200 hover:bg-gray-300" onClick={() => editor.chain().focus().setTextAlign("left").run()}>
            <AlignLeft />
          </button>
          <button type="button" className="p-2 rounded-md bg-gray-200 hover:bg-gray-300" onClick={() => editor.chain().focus().setTextAlign("center").run()}>
            <AlignCenter />
          </button>
          <button type="button" className="p-2 rounded-md bg-gray-200 hover:bg-gray-300" onClick={() => editor.chain().focus().setTextAlign("right").run()}>
            <AlignRight />
          </button>
          <button type="button" className="p-2 rounded-md bg-gray-200 hover:bg-gray-300" onClick={() => editor.chain().focus().toggleBulletList().run()}>
            <List />
          </button>
        </div>
        <div className="border-2 border-gray-300 p-1 rounded-md w-full max-h-52 overflow-auto">
          <EditorContent editor={editor} className="prose prose-sm sm:prose py-5 lg:prose-lg xl:prose-xl" />
        </div>
        <button className="bg-color p-2 border-2 border-primary text-white rounded-md hover:bg-white hover:border-primary hover:text-black mt-5" type="submit">
          Ajouter un blog
        </button>
      </form>
    </div>
  );
};

export default Tiptap;
