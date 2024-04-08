import Features from "@/components/hero/Features"
import Services from "@/components/services/Services";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 overflow-hidden">
      <h1 className="text-center md:text-2xl underline font-light mb-5 text-color">Services</h1>
      <div>
        <div className="grid grid-cols-1 lg:h-[85vh] lg:grid-cols-2 ">
          <div className="relative z-10 lg:py-16 animate-slide-in-left">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image priority alt="Design Image" src={"/services.jpg"} className="absolute inset-0 md:h-full md:w-full object-cover size-60 " fill sizes="(max-width: 768px) 100vw, 1920px" />
            </div>
          </div>
          <div className="relative flex items-center bg-gray-100 border-2 border-primary animate-slide-in-right">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>
            <div className="p-8 sm:p-10 lg:p-10  flex justify-center w-full ">
              <div>
                <Features />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <div className="px-5 mb-10">
        <ul className="list-disc grid gap-3">
          <li>Entre tradition et innovation, nous vous invitons dans un voyage créatif où vos rêves prennent forme. Chaque projet débute par une exploration approfondie de vos aspirations pour assurer que l'objet final ne soit pas seulement une pièce d'exception, mais une extension de votre identité personnelle ou professionnelle. Nous nous engageons à fournir une attention sans pareille à chaque étape du processus, de la première esquisse à la réalisation finale.</li>
          <li>En choisissant de travailler avec nous, vous vous associez à un atelier où l'authenticité des créations est la pierre angulaire de notre réputation. Nous limitons la production non pas par exclusivité, mais pour garantir une attention méticuleuse aux détails qui ne saurait être compromise. Chaque objet que nous livrons est une pièce de collection distincte, conçue pour célébrer la singularité de son propriétaire.</li>
          <li>Pérenniser l'art de l'excellence tout en s'engageant pour une planète plus saine est au cœur de notre philosophie. Nous adoptons des pratiques durables, sélectionnons des matériaux écoresponsables et travaillons à minimiser notre empreinte écologique tout au long du processus de création. Nos créations ne traversent pas seulement le temps, elles s'inscrivent dans une démarche consciente visant à valoriser le patrimoine environnemental pour les générations à venir.</li>
        </ul>
      </div>
      <div className="flex justify-center mb-20">
        <Link href={"/contact"} className="p-2 rounded-md hover:bg-white border-color border font-medium bg-color ">
          Contactez-nous maintenant
        </Link>
      </div>
    </section>
  );
}

export default page