import React from 'react'
import Back from "../common/Back"
import Location from '../home/location/Location'
import "../home/location/style.css"
import LocationCard from '../home/location/LocationCard'
const Nightclub = () => {
  return (
    <>
    <section className='section'>
    <Back name='night' title='Night Club'  />
        <div className='box'>
<LocationCard />
        </div>

    </section>
    
    
    
    </>
  )
}

export default Nightclub