import ProductCard from "../../components/ProductCard/ProductCard";
import "./style.css";
import dataMainPage from '../../constants/data-main-page.json';
import line from '../../images/line.png';
import VoiseAssistant from '../../components/VoiseAssistant/VoiseAssistant'
import { useImageToggle } from "../../components/ImageToggleContext/ImageToggleContext";

export default function MainPage() {

    const { areImagesVisible } = useImageToggle();
    let mainData = Object.values(dataMainPage)[0];

    return(<>
            <div className="body-layout_leftside">
                <h2 className="main_header">
                    Актуальные предложения
                </h2>
                <div className="banner">
                    <h3 className="banner-header1">
                    Специальная акция!
                    </h3>
                    <h3 className="banner-header2">
                    Купи один смартфон, и получи второй в подарок!
                    </h3>
                    <h3 className="banner-desc">1 + 1 = 2</h3>
                    {areImagesVisible && (
        <img 
        src={line} alt="" 
        />
      )}
                    
                </div>
                <div className="cards-layout">
                        { mainData.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}

                </div>
                <VoiseAssistant/>
            </div>
        
            
        
    </> )
}