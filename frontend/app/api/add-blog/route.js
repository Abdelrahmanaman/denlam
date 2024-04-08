import { connectDB } from "@/utils/db";
import Blog from "@/model/blog";

export const POST = async(request) => {
    const content = await request.json()
   try{
       connectDB();
        const blog = new Blog({
            content,
       });
       await blog.save();
       return new Response(JSON.stringify("Success"), { status: 200 })
   }catch(err){
    console.log(err.message)
       return new Response("Failed", { status: 500 })

   }

}