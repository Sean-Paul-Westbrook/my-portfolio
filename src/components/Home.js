import React from "react";
import image from "../su-san-lee-E_eWwM29wfU-unsplash.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="Mt.Fuji" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Konnichiwa, Sean desu.</h1>
            </section>
        </main>
    )
}