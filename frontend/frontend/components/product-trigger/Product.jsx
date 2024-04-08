"use client"
const Product = ({handleLight, light}) => {
    console.log(light)
  return (
            <div className={`${light? "bg-black": "bg-yellow-500"} md transition-all duration-300  w-full h-[400px] md:h-full col-span-1 flex justify-center items-center`}>
                <div className={`${light? "bg-yellow-300": "bg-purple-400"} transition-all duration-300 size-10/12`}>
                </div>
                <button className="bg-red-500 py-2 px-3 rounded-md" onClick={handleLight}>Click me</button>
            </div>

  )
}

export default Product