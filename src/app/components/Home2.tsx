import profil from '@/public/logo.png'

import '../styles/Home.css'
import Image from 'next/image'

function Home2(){
    return <>
    <div className="home_page">
        <div id="profil">
          <Image src={profil} alt="profil"  />
        </div>

        <div className='my_portfolio'>
          <h1 className='title_text'>
            My portfolio
          </h1>
          <a href="/cv.pdf" download>
            <button>Download my resume</button>
          </a>
        </div>
    </div>
    </>
}

export default Home2;