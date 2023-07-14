import './index.css';

export default (props) => {
    return(
        <header className={props.bg?'black':''}>
            <div className='header--logo'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png " alt="" />
            </div>
            <div className='header--user'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>
        </header>
    )
}