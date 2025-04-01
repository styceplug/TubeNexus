import React from 'react'

const Statistics = () => {

   const statData = [
    {
        image: '../src/assets/images/member.svg',
        name: 'Member Since',
        stat: '2024',
        backgroundColor: '#36B7FF'
    },
    {
        image: '../src/assets/images/total.svg',
        name: 'Total Tracks in Catalogue',
        stat: '15 Tracks',
        backgroundColor: '#FF6B35',
        color: 'white'
    },
    {
        image: '../src/assets/images/artist.svg',
        name: 'Artist Name',
        stat: 'Corizo',
        backgroundColor: '#36B7FF'
    },
    {
        image: '../src/assets/images/genre.svg',
        name: 'Genre',
        stat: 'Afrobeat',
        backgroundColor: '#FF6B35',
        color: 'white'
    },
    {
        image: '../src/assets/images/track.svg',
        name: 'Promoted Tracks',
        stat: '10 Tracks',
        backgroundColor: '#36B7FF'
    }

   ]

  return (
    <section className='statistics'>
      <h2>Account Statistics</h2>

      <div className="stats-container">
         {
            statData.map((stat, index) => (
                <div
                 key={index}
                 className='statistic'
                 style={{backgroundColor: stat.backgroundColor}}
                 
                >
                    <div className="head">
                        <img src={stat.image} alt="" />
                        <p style={{color: stat.color}}>{stat.name}</p>
                    </div>
                    <p style={{color: stat.color}}>{stat.stat}</p>
                </div>
            ))
         }
      </div>
    </section>
  )
}

export default Statistics
