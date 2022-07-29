import Like from 'assets/img/like-icon.png';

import './styles.css';

type Props = {
    name: string;
    description: string;
    img: string;
    price: number;
}

function Card({ name, description, img, price } : Props) {
    return (
        <div className="card">
            <div className="card-image-container">
                <div className="pizza-image">
                    <img src={img} alt="Pizza" />
                </div>
                <div className="like-pizza-image">
                    <img src={Like} alt="Like Pizza" />
                </div>
            </div>

            <div className="card-info-container">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>

            <div className="card-price">
                <p>R$ {price}</p>
            </div>
            
            <button className="btn card-btn">Comprar agora</button>
        </div>
    )
}

export default Card;