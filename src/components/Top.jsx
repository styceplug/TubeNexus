import React from 'react'
import { useState } from 'react'

const Top = () => {

    const [topTracks, setTopTracks] = useState(false);

    const yourTopTracks = [
        {
            cover: '../src/assets/images/sss.png',
            artistName: 'Artist Name',
            trackTitle: 'Track Title'
        },
        {
            cover: '../src/assets/images/ssf.png',
            artistName: 'Artist Name',
            trackTitle: 'Track Title'
        }
    ]

    const yourTopAlbums = [
        {
            cover: '../src/assets/images/sss.png',
            artistName: 'Artist Name',
            albumTitle: 'Album Title'
        },
        {
            cover: '../src/assets/images/sss.png',
            artistName: 'Artist Name',
            albumTitle: 'Album Title'
        }
    ]

    const topSongs = topTracks ? yourTopTracks : yourTopAlbums

  return (
    <section className='top'>
      <div className="switch">
          <button
            className={`switch-button ${topTracks ? 'active' : ''}`}
            onClick={() => setTopTracks(true)}
          >
            Your Top Tracks
          </button>
          <button
            className={`switch-button ${!topTracks ? 'active' : ''}`}
            onClick={() => setTopTracks(false)}
          >
            Your Top Albums
          </button>
      </div>

      <div className="songs">
        {
            topSongs.map((topSong, index) => (
                <div
                  key={index}
                  className='song'
                >
                    <div className="image-content">
                        <img src={topSong.cover} alt="" />
                    </div>
                    <div className="text-content">
                        <article>
                            <h6>{topSong.artistName}</h6>
                            <p>{topSong.trackTitle}</p>
                            <p>{topSong.albumTitle}</p>
                        </article>
                    </div>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default Top
