import { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb.jsx';
import MovieRow from './components/MovieRow/index.jsx';
import FeaturedMovie from './components/FeaturedMovie/index.jsx';
import Header from './components/Header/index.jsx';


const App = () => {

    const [tmdbList, setTmdbList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [bgHeader, setBGHeader] = useState(false);

    useEffect(()=>{
        const loadAll = async ()=>{
            let list = await Tmdb.getHomeList();
            setTmdbList(list);

            let originals = list.filter(i=>i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        };

        loadAll();
    }, [])

    useEffect(()=>{

        const scrollListener = ()=>{
            if(window.scrollY > 10){//posicao do scroll da pagina
                setBGHeader(true);
            }else{
                setBGHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener)
    }, [])

    return (
        <div className='page'>
            <Header bg={bgHeader} />
            {
                featuredData && <FeaturedMovie item={featuredData} />
            }
            <section className='lists'>
                {
                    tmdbList.map((item, key)=>{
                        return <MovieRow key={key} title={item.title} items={item.items} /> 
                    })
                }
            </section>
            <footer>
                Clone Netflix feito com fins educativos.
            </footer>
            {
                tmdbList.length == 0 && <div className='loading'>
                <img src="https://www.rchandru.com/images/portfolio/loading.gif" alt=""/>
            </div>
            }
        </div>
    )
}

export default App; //exporta função através da variável