import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import { ImgContextProvider } from './context/imgContext';
import { TextContextProvider } from './context/textContext';
import { HolidaysContextProvider } from './context/holidaysContext';

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
};

const App = () => {
    return (
        <div style={wrapper}>
            <HolidaysContextProvider>
                <ImgContextProvider>
                    <TextContextProvider>
                        <Header />
                        <Card />
                        <Footer />
                    </TextContextProvider>
                </ImgContextProvider>
            </HolidaysContextProvider>
        </div>
    );
};

export default App;
