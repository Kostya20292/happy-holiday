import CardBg from '../../../img/card-bg.jpg';
import { useSelector } from 'react-redux';

const Image = () => {
    const { urlImg } = useSelector((state) => state.image);

    return <img src={urlImg || CardBg} alt="Card" width={840} height={520} />;
};

export default Image;
