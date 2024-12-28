import './App.css'
import { TwitterFollowCard } from './TwitterFollwCard'

export function App(){
    //const format = (userName) => `@${userName}`
    //const formattedUserName = <span>@midudev</span>
    return (
        <div className='App'>
            <TwitterFollowCard  isFollowing userName="midudev" name="Miguel Angel Duran"/>
            <TwitterFollowCard  isFollowing={false} userName = "pheralb" name="Pablo Hernandez"/>
            <TwitterFollowCard  isFollowing={false} userName = "elonmusk" name="Elon Musk"/>
            <TwitterFollowCard  isFollowing userName="vxnder" name="Vander Hard" />
        </div>
        
    )
}

//style={{display: 'flex', alignItems: 'center', color: '#fff'}}
// un componente es una factoria o funcion que al ejecutarla devuelve un elemento
// el elemento es lo que se renderiza