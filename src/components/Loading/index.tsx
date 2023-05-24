import { Player, Controls } from '@lottiefiles/react-lottie-player';

export function Loading() {
    return (
        <Player
            autoplay
            loop
            src="https://assets8.lottiefiles.com/packages/lf20_rsqm1ucz.json"
            style={{ height: '300px', width: '300px' }}
        >
        </Player>   
    )
}