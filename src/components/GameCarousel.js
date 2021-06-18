import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import GameCard from "./GameCard"
import { Typography } from '@material-ui/core';
import 'swiper/swiper-bundle.css';
import { getLastGames } from "../api/games"
import Skeleton from '@material-ui/lab/Skeleton'

const GameCarousel = (props) => {
    const [items, setItems] = useState(null)

    // Esto corre al inicio del render
    useEffect( () => {
        const fetchData = async () => {
            const newItems = await getLastGames()
            if (newItems) {
                const itemForCarousel = newItems.map((aux) => {
                    return (
                        <SwiperSlide key={aux.id}>
                            <GameCard gameInfo={aux} />
                        </SwiperSlide>
                    )
                })
                setItems(() => {
                    return itemForCarousel
                })
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <Typography variant="h4" style={{ marginBottom: "0.5em" }}>
                {props.title}
            </Typography>

            <Swiper
                spaceBetween={10}
                slidesPerView={5}
            >
                {
                    (items && Array.isArray(items))
                    ? items
                    : skeletonLoading()
                }
            </Swiper>
            
        </>
    )
}

const skeletonLoading = () => {
    let items = []
    for (let i = 0; i < 6; i++) {
        items.push(
            <SwiperSlide key={i}>
                <Skeleton variant="rect" width="100%" height="21em" />
            </SwiperSlide>
        )
    }
    return (
        items
    )
}

export default GameCarousel;