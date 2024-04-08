import { revalidatePath } from "next/cache";

const FormContact =  async () => {


  return (
    <form className="px-3">
      <h3 className="text-primary text-xl font-semibold">Contact us</h3>
      <div className="flex flex-col gap-1">
        <input className="p-2  border-2 border-primary text-color focus:outline-gray-900" type="email" placeholder="Email" name="email" />
        <input className="p-2  border-2 border-primary text-color focus:outline-gray-900" type="text" name="subject" id="subject" placeholder="Sujet" />
        <textarea className="p-2 resize-none border-2 h-52 md:w-[500px] border-primary text-color" name="message" id="message" placeholder="Message"></textarea>
      </div>
      <button className="border-2 mt-2 border-primary  px-3 py-2 rounded-md text-color hover:bg-primary hover:text-white">Soumettre</button>
    </form>
  );
};

export default FormContact;
