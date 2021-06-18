import React from 'react'
import About from '../../components/About/About'
import Bottom_Banner from '../../components/Bottom Banner/Bottom_Banner'
import CardSlider from '../../components/CardSlider/CardSlider'
import Imageslider from '../../components/Imageslider/Imageslider'
import Couple_Package from '../../components/pages/Couple_Package'
import Most_Populer_Package from '../../components/pages/Most_Populer_Package'
import Student_Package from '../../components/pages/Student_Package'
import PauseOnHover from '../../components/Comment/PauseOnHover'
import Trending_Bangladesh_Destination from '../../components/pages/Trending_Bangladesh_Destination'

export default function Home() {
    return (
        <div>
            <Imageslider />
            <About />
            <Trending_Bangladesh_Destination />
            <Most_Populer_Package />
            <Student_Package />
            <Couple_Package />
            <Bottom_Banner/>
            <CardSlider />
            <PauseOnHover/>
        </div>
    )
}
