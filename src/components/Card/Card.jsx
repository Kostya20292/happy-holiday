import style from './Card.module.css';
import ImageCard from './Image/Image';
import Felicitation from './Felicitation/Felicitation';
import CardBg from '../../img/card-bg.jpg';

const Card = () => (
    <div className={style.card}>
        <div className={style.wrapper}>
            <div className={style.image}>
                <ImageCard img={CardBg} />
                <Felicitation />
            </div>
        </div>
    </div>
);

export default Card;
