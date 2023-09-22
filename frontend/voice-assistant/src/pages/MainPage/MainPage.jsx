import BtnFilled from "../../components/BtnFilled/BtnFilled";
import BtnOutlined from '../../components/BtnOutlined/BtnOutlined';
import Catalog from "../../components/Catalog/Catalog";
import Header from "../../components/Header/Header";
import "./style.css";

export default function MainPage() {
    return(<>
        <Header />
        <Catalog />
        {/* <BtnFilled name_of_btn={"Напиги мне"} />
        <BtnOutlined name_of_btn={"Напиги мне"} /> */}
    </> )
}