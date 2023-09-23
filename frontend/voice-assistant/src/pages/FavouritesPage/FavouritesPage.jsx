import './style.css';
import Header from '../../components/Header/Header';
import Catalog from '../../components/Catalog/Catalog';

export default function FavouritesPage() {
    return (<>
        <Header />

<div className="body-layout">
    <Catalog />
    <div className="body-layout_leftside">
        <h2 className="main_header">
            Избранное
        </h2>
        
        <div className="cards-layout">
                {/* { mainData.map((product) => (
                <ProductCard key={product.id} data={product} />
            ))} */}
        </div> 
    </div>
</div>
    </>

    )
}