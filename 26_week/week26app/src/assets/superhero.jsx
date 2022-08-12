import './superhero.css';

function Superhero(props) {
    return (
        <div className="card text-center article">
            <h2 className="card-header">{props.superhero}</h2>
            <div className="card-body"><img src={props.src}></img>
                <h6 className="card-title">Вселенная: {props.universe}</h6>
                <h6 className="card-title">Альтер эго: {props.alter_ego}</h6>
                <h6 className="card-title">Род деятельности: {props.occupation}</h6>
                <h6 className="card-title">Друзья: {props.friends}</h6>
                <h6 className="card-title">Суперсилы: {props.superpowers}</h6>
                <p className="card-text">Подробнее: {props.more}</p>
            </div>
            <h5 className="card-title">Оценить супергероя</h5>
            <div className="rating-area">
                <input type="radio" id="star-5" value="5" />
                <label for="star-5" title="Оценка «5»"></label>
                <input type="radio" id="star-4" value="4" />
                <label for="star-4" title="Оценка «4»"></label>
                <input type="radio" id="star-3" value="3" />
                <label for="star-3" title="Оценка «3»"></label>
                <input type="radio" id="star-2" value="2" />
                <label for="star-2" title="Оценка «2»"></label>
                <input type="radio" id="star-1" value="1" />
                <label for="star-1" title="Оценка «1»"></label>
            </div>
        </div>
    );
}

export default Superhero;