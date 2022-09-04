import style from './Card.module.css';
import ImageCard from './Image/Image';
import Felicitation from './Felicitation/Felicitation';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchTextId } from '../../store/textSlice';
import { fetchImageId } from '../../store/imageSlice';

const Card = () => {
    const { idText, idImg } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (idText && idImg) {
            dispatch(fetchTextId(idText));
            dispatch(fetchImageId(idImg));
        }
    });

    return (
        <div className={style.card}>
            <div className={style.wrapper}>
                <div className={style.image}>
                    <ImageCard />
                    <Felicitation />
                </div>
            </div>
        </div>
    );
};

export default Card;
