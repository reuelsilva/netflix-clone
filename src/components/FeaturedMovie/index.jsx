import './index.css'

export default (props)=>{

    let firstDate = new Date(props.item.first_air_date);
    let genres = [];
    props.item.genres.map((item)=>{
        genres.push(item.name)
    });

    let overview = props.item.overview;
    if(overview.length > 200){
        overview = overview.substring(0, 200) + '...';
    }
    
    return(
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${props.item.backdrop_path})`
        }}>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{props.item.original_name}</div>
                    <div className='featured--info'>
                        <div className='featured--points'>{props.item.vote_average.toFixed(1)} pontos</div>
                        <div className='featured--year'>{firstDate.getFullYear()}</div>
                        <div className='featured--seasons'>
                            {props.item.number_of_seasons} {props.item.number_of_seasons > 1?'temporadas':'temporada'} 
                        </div>
                    </div>
                    <div className='featured--overview'>{overview}</div>
                    <div className='featured--buttons'>
                        <a href="#" className='featured--watchbutton'>Assistir</a>
                        <a href="#" className='featured--mylistbutton'>+ Minha Lista</a>
                    </div>
                    <div className='featured--genres'><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}