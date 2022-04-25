/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
    // Membuat state movies;
    const [movie, setMovie] = useState("");

    async function fetchMovie() {
        // Melakukan side effect: fetch data movie (api);
        const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");

        const data = await response.json();

        // Set  movie dengan data movie hasil fetch 
        setMovie(data);
    }

    useEffect(fetchMovie, []);
    // Params kedua array kosong: agar useEffect tidak looping (fetch sekali).

    console.log(movie);

    return(
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__leftside}>
                    <h2 className={styles.hero__title}>{movie.Title}</h2>
                    <h3 className={styles.hero__genre}>{movie.Genre}</h3>
                    <p className={styles.hero__description}>{movie.Plot}</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__rightside}>
                    <img className={styles.hero__image} src={movie.Poster} alt="" />
                </div>
            </section>
        </div>
    );
}

export default Hero;