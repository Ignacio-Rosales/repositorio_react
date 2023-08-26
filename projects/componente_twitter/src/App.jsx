import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App () {

    return (
        <section className='App'>
            <TwitterFollowCard userName="nahurc2000" initialIsFollowing = {true}> 
                Nahuel Diego 
            </TwitterFollowCard>

            <TwitterFollowCard userName="FacuBassan" >
                Facundo Bassan
            </TwitterFollowCard>

            <TwitterFollowCard userName="NaxoRosales" >
                Ignacio Rosales 
            </TwitterFollowCard> 

            <TwitterFollowCard userName="lautycapde" > 
                Capde
            </TwitterFollowCard>
            
        </section>
    )
}


