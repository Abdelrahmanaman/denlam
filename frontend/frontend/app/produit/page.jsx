"use client"
import Product from '@/components/product-trigger/Product'
import React, { useState } from 'react'



const page = () => {
    const [light, setLight] = useState(false)

    const handleLight =  () =>{
        setLight((prev) =>  !prev)
        console.log(light);
    }

  return (
    <article className={`md:h-[92vh] ${light? "bg-black" : "bg-red-400"} transition-all duration-300 md:grid-cols-2 md:grid`}>
      <Product handleLight={handleLight} light={light} />
      <div className={`grid-cols-1 flex flex-col gap-2 justify-center transition-all duration-300 px-3 ${light? "text-white": "text-black"}`}>
        <h1>Produit nom</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ab eos voluptatem reprehenderit porro itaque velit, ducimus delectus facilis sed beatae, minus adipisci, quia ratione. Ab repudiandae laboriosam hic voluptas? Consectetur sunt maiores harum iusto excepturi dolores asperiores non quam quas facere cupiditate temporibus debitis est nesciunt molestias tenetur, molestiae blanditiis sint minima, eligendi, atque laboriosam eos architecto maxime? Sunt. Aspernatur quibusdam minus amet. Autem ipsam accusantium rem voluptates laborum! In nihil officiis alias commodi, quaerat accusamus repellendus, rerum dolores delectus perferendis ea deserunt eos quod tenetur, autem unde natus! Ea, dicta! Mollitia itaque ex minima optio placeat inventore perferendis alias? Facilis deleniti ipsa adipisci porro, nobis cupiditate delectus dolorum, totam magni, necessitatibus veritatis possimus
          accusantium animi aut sint voluptatum? Minima dicta incidunt laudantium eius? Eum nostrum hic aut non quae accusamus dolores harum maxime qui, pariatur quam velit ea nemo cumque obcaecati laborum, rem quas assumenda molestias corporis veritatis. Voluptatibus, voluptas illo fuga eligendi rem eveniet, exercitationem necessitatibus natus vel dicta quia. Recusandae voluptatibus consequatur id eligendi atque laboriosam alias omnis reiciendis ea, mollitia modi sapiente error a distinctio? Ratione dolores sed asperiores. Dolor molestias ea, odio adipisci quaerat labore voluptatibus neque est sapiente nobis. Soluta dolore qui temporibus maxime, facilis recusandae, laboriosam vitae molestiae, tempora doloribus sequi rerum?
        </p>
      </div>
    </article>
  );
}

export default page