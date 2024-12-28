import './App.css'
export function TwitterFollowCard({userName, name, isFollowing}){
    console.log(isFollowing)
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt ="avatar"/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}

//style={{display: 'flex', alignItems: 'center', color: '#fff'}}
//las props son inmutables, por ejemplo es una mala practica: userName = `@${userName}`
// lo correcto seria crear una constante con otro nombre: const correctName =  `@${userName}`
//debe ser asi porque no debemos modificar la fuente, tenemos que crear otra variable si queremos el prop modificado