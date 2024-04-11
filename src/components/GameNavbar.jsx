import '../css/GameNavbar.css'

function GameNavbar(){
    return(
        <>
            <nav className="game-navbar">
                <button className='hover about-game'>ABOUT</button>
                <button className='hover features'>FEATURES</button>
                <button className='hover soundtracks'>SOUNDTRACKS</button>
                <button className='hover news'>NEWS</button>
                <button className='hover extras'>EXTRAS</button>
                <button className='hover details'>DETAILS</button>
            </nav>
        </>
    );
}

export default GameNavbar;