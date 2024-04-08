// "use client"
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
// import { Input } from "../ui/input";

// const formSchema = z.object({
//   emailAddress: z.string().email(),
// });

// const ContactForm = () => {
//   const form = useForm({
//     resolver:zodResolver(formSchema),
//     defaultValues: {
//       emailAddress: ""
//     }
//   })
  
// const handleSubmit = async () => {

//     await db.create({
//         username,
//         password
//     })

// }

// const getData = async () => {
//     const data = await db.findAll()
    
// }
//   return (  
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit()}>
//     <FormField control={form.control} name="emailAddress" render={({field})=> {
//       return <FormItem> 
//         <FormLabel>Email Address:</FormLabel>
//         <FormControl >
//             <Input placeholder="Email Address" type="email" {...field} />
//         </FormControl>
//         <FormMessage />
//       </FormItem>
//     }}  />
//       </form>
//     </Form>
//   );
// };

// export default ContactForm;
