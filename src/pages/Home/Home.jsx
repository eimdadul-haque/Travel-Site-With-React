import React from 'react'
import About from '../../components/About/About'
import PauseOnHover from '../../components/Comment/PauseOnHover'
import Bottom_Banner from '../../components/Bottom Banner/Bottom_Banner'
import CardSlider from '../../components/CardSlider/CardSlider'
import Imageslider from '../../components/Imageslider/Imageslider'
import Couple_Package from '../Packages/Couple Package/Couple_Package'
import Most_Populer_Package from '../Packages/Most Populer Package/Most_Populer_Package'
import Student_Package from '../Packages/Student Package/Student_Package'
import Trending_Bangladesh_Destination from '../Packages/Trending Bangladesh Destination/Trending_Bangladesh'

export default function Home() {
    return (
        <div className="">
            <Imageslider />
            <About/>
            <Trending_Bangladesh_Destination title="Trending Bangladesh Destination" desc="abc" button={true} />
            <Most_Populer_Package title="Most Populer Package" desc="abc" button={true} />
            <Student_Package title="Student Package" desc="abc" button={true} />
            <Couple_Package title="Couple Package" desc="abc" button={true} />
            <Bottom_Banner />
            {/* <CardSlider /> */}
            <PauseOnHover />
        </div>
    )
}
