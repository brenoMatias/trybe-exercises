import React from 'react';
import { getGames } from '../api_fake/gamesAPI';

import CardGame from '../components/CardGame';
import Loading from '../components/Loading';

class home extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
          games: [],
          loading: true,
        }
      }
      componentDidMount(){
        this.fetchGames();
      }
    
       fetchGames = async () => {
        const games = await getGames()
        this.setState({games, loading: false})
      }
    
      render(){
        const { games, loading } = this.state;
        return (
          <main className="App">
            <header className="header">
              <h1>Os melhores jogos de todos os tempos.
              </h1>
              <small>Na nossa opinião &#128540;</small> 
            </header>
              {loading ? 
                <Loading />
                :
                <section className="main-container">
                  {games.map((game) => (
                    <div className="game-list" key={game.id}>
                      <CardGame game={ game } />
                    </div> 
                  ))}
                </section>
              }
          </main>
        );
      }
}

export default home;