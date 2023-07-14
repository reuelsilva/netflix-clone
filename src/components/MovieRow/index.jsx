import { useState } from 'react';
import './index.css';

export default (props) => {

    const [scrollX, setScrollX] = useState(0);

    let totTitles = 0; //total de títulos retornado na requisicao
    props.items.results.map(()=>{
        totTitles += 1; //para cada objeto em array results
    });

    const handleLeftArrow = () =>{
        let step = scrollX + (window.innerWidth / 2);
        if(step > 0){
            step = 0;
        }

        setScrollX(step);
    }

    const handleRightArrow = () =>{
        let step = scrollX - (window.innerWidth / 2);
        let tamlist = totTitles * 150;
        if((window.innerWidth - tamlist) > step ){
            step = (window.innerWidth - tamlist) - 60;
        }

        setScrollX(step);
    }
    
    return(
        <div  className='movieRow'>
            <h2>{props.title}</h2>
            <div className='movieRow--left' onClick={handleLeftArrow}>
                <span className="material-symbols-outlined" style={{fontSize: 50}}>navigate_before</span>
            </div>
            <div className='movieRow--right' onClick={handleRightArrow}>
                <span className="material-symbols-outlined" style={{fontSize: 50}}>navigate_next</span>
            </div>
            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{width: totTitles * 150, marginLeft:scrollX}}>                    
                    {
                        props.items.results && props.items.results.map((item, key)=>{
                            return(
                                <div key={key} className='movieRow--item'>
                                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )    
}