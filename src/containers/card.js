import React from "react";




function Card({ name, email, id }) {
    return (
        <section className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
            <h1>{name}</h1>
            <p>{email}</p>
        </section>
    )
}


export default Card;