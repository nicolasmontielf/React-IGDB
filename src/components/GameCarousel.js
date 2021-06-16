import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import GameCard from "./GameCard"
import { Typography } from '@material-ui/core';
import 'swiper/swiper-bundle.css';
import { getLastGames } from "../api/games"

const GameCarousel = (props) => {
    const [items, setItems] = useState([])

    // Esto corre al inicio del render
    useEffect( () => {
        const fetchData = async () => {
            const newItems = await getLastGames()
            if (newItems) {
                setItems(() => {
                    return newItems
                })
            }
        }
        fetchData()
    }, [])
    
    const itemForCarousel = items.map((aux) => {
        return (
            <SwiperSlide key={aux.id}>
                <GameCard gameInfo={aux} />
            </SwiperSlide>
        )
    })

    return (
        <>
            <Typography variant="h3">
                {props.title}
            </Typography>

            <Swiper
                spaceBetween={10}
                slidesPerView={5}
            >
                {itemForCarousel}
            </Swiper>
            
        </>
    )
}

export default GameCarousel;