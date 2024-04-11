import '../css/MainNavbar.css'

function MainNavbar(){
    return (
        <>
            <nav className="main-navbar">
                <div className="buttons-main">
                    <button className='hover games'>GAMES</button>
                    <button className='hover blog'>BLOG</button>
                    <button className='hover about-us'>ABOUT</button>
                    <button className='hover support'>SUPPORT</button>
                    <button className='hover more'>MORE</button>
                    <button className='hover store'>STORE</button>
                </div>
                <div className="socials">
                    <img className='hover mail' src="../src/assets/socials/envelope-solid.svg" alt="" />
                    <img className='hover twitter' src="../src/assets/socials/x-twitter.svg" alt="" />
                    <img className='hover mastodon' src="../src/assets/socials/mastodon.svg" alt="" />
                    <img className='hover facebook' src="../src/assets/socials/facebook-f.svg" alt="" />
                    <img className='hover youtube' src="../src/assets/socials/youtube.svg" alt="" />
                    <img className='hover twitch' src="../src/assets/socials/twitch.svg" alt="" />
                    <img className='hover discord' src="../src/assets/socials/discord.svg" alt="" />
                    <img className='hover instagram' src="../src/assets/socials/instagram.svg" alt="" />

                </div>
            </nav>
        </>
    );
}

export default MainNavbar;