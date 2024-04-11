import '../css/GameHeader.css'

function GameHeader(){
    return(
        <>
            <header className='gameHeader'>
                <div className='game-logo'>
                    <img src="./src/assets/game-logo.webp" alt="" />
                </div>
                <button className='buy-game'>BUY NOW</button>
            </header>
        </>
    );
}

export default GameHeader;