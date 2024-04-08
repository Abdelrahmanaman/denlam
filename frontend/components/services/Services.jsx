import Image from "next/image";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 my-5 justify-between">
      <div className="group relative block bg-black w-full h-96">
        <Image fill sizes="100" alt="Services" src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute inset-0 h-full w-full object-cover object-center opacity-75 transition-opacity group-hover:opacity-50" />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">Une Expérience de Conception Personnalisée</p>
            </div>
          </div>
        </div>
      </div>
      <div className="group relative block bg-black w-full h-96">
        <Image fill sizes="100" alt="Services" src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute inset-0 h-full w-full object-cover object-center opacity-75 transition-opacity group-hover:opacity-50" />
        <div className="relative p-4 sm:p-6 lg:p-8">
          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">Authenticité et Exclusivité</p>
            </div>
          </div>
        </div>
      </div>
      <div className="group relative block bg-black w-full h-96">
        <Image fill sizes="100" alt="Services" src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute inset-0 h-full w-full object-cover object-center opacity-75 transition-opacity group-hover:opacity-50" />
        <div className="relative p-4 sm:p-6 lg:p-8">
          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">Durabilité et Responsabilité</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
