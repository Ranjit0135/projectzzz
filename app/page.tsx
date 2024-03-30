// import { url } from "inspector";
// import { useEffect, useRef } from "react";

export default function Home() {
  // const carouselRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const carousel = carouselRef.current;
  //   if (!carousel) return;
  //   let currentPosition = 0;

  //   const slide = () => {
  //     currentPosition -= 1;
  //     carousel.style.transform = `translateX(${currentPosition}px)`;

  //     if (
  //       Math.abs(currentPosition) >=
  //       carousel.scrollWidth - carousel.clientWidth
  //     ) {
  //       currentPosition = 0;
  //       carousel.style.transition = "none";
  //       carousel.style.transform = `translateX(${currentPosition}px)`;
  //       setTimeout(() => {
  //         carousel.style.transition = "transform 0.5s ease";
  //       }, 50);
  //     }
  //   };

  //   const interval = setInterval(slide, 3000); // Adjust interval time as per your preference

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  return (
    // <div className="flex justify-center items-center h-screen ">
    //   <div
    //     className="bg-slate-500 w-[90vw] h-[70vh]   flex flex-col rounded-3xl"
    //     style={{ backgroundImage: "url('/green.jpg')" }}
    //   >
    //     <nav className=" flex justify-between h-[10vh]">
    //       <div className="flex gap-4 items-center ml-5">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           className="w-6 h-6"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
    //           />
    //         </svg>

    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           className="w-6 h-6"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
    //           />
    //         </svg>

    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           className="w-6 h-6"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
    //           />
    //         </svg>
    //       </div>
    //       <div className=" flex items-center mr-5">
    //         <input placeholder="search" className="rounded"></input>
    //       </div>
    //     </nav>

    //     <section className="relative grid grid-cols-3 gap-10 items-center justify-center h-[60vh] m-5">
    //       <div ref={carouselRef} className="flex justify-center flex-col">
    //         <img src="/plant1.png" alt="" className="max-w-full max-h-60 " />
    //         <span className=" text-center">Pot1</span>
    //         <label className=" text-center font-semibold">$200</label>
    //       </div>
    //       <div className="flex justify-center flex-col">
    //         <img src="/plant5.png" alt="" className="max-w-full max-h-60" />
    //         <span className=" text-center">Pot2</span>
    //         <label className=" text-center font-semibold">$250</label>
    //       </div>
    //       <div className="flex justify-center flex-col">
    //         <img src="/plant6.png" alt="" className="max-w-full max-h-60" />
    //         <span className=" text-center">Pot3</span>
    //         <label className=" text-center font-semibold">$300</label>
    //       </div>
    //     </section>
    //   </div>
    //   <div className="absolute bg-slate-300  flex bottom-20 gap-4 rounded-3xl items-center justify-around">
    //     <div className=" m-2 pl-5">
    //       <h1>Monstera Desjdvd</h1>
    //       <label className=" font-semibold">$500</label>
    //     </div>
    //     <div className="m-2 pr-5 bg-white rounded-xl">
    //       <button className="p-2">+AddToCart</button>
    //       {/* {selector.some((x) => x.id === item.id) ? (
    //                 <button
    //                   onClick={() => removeItemFromCart(item)}
    //                   style={{
    //                     backgroundColor: "orangered",
    //                     width: "100%",
    //                     cursor: "pointer",
    //                   }}
    //                 >
    //                   Remove from Cart
    //                 </button>
    //               ) : (
    //                 <button
    //                   onClick={() => addItemToCart(item)}
    //                   style={{
    //                     backgroundColor: "orangered",
    //                     width: "100%",
    //                     cursor: "pointer",
    //                   }}
    //                 >
    //                   Add to Cart
    //                 </button>
    //               )} */}
    //     </div>
    //   </div>
    // </div>
    <>
      <div>sjdfk</div>
    </>
  );
}
