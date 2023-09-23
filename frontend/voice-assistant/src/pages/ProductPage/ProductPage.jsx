

// export default function ProductPage() {
//    const location = useLocation();
//    const productData = location.state.productData;

//    return (
//       <>
//          <h2>Страница товара {productData.id}</h2>
//          <div>
//             <img src={productData.image} alt={productData.name} />
//             <h3>{productData.name}</h3>
//             <p>Цена до: {productData.price_before} руб.</p>
//             <p>Цена после: {productData.price_after} руб.</p>
//          </div>
//       </>
//    );
// }

// import React from 'react';

// export default function ProductPage() {
//    const location = useLocation();
//    const productData = location.state.productData;

//    return (
//       <>
//          <h2>Страница товара {productData.id}</h2>
//          <div>
//             <img src={productData.image} alt={`картинка товара ${productData.name}`} />
//             <h3>{productData.name}</h3>
//             <p>Цена до: {productData.price_before} руб.</p>
//             <p>Цена после: {productData.price_after} руб.</p>
//          </div>
//       </>
//    );
// }

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// export default function ProductPage() {
//   const location = useLocation();
//   const productData = location.state.productData;

//   return (
//     <>
//       <h2>Страница товара {productData.id}</h2>
//       <div>
//         <img src={productData.image} alt={`картинка товара ${productData.name}`} />
//         <h3>{productData.name}</h3>
//         <p>Цена до: {productData.price_before} руб.</p>
//         <p>Цена после: {productData.price_after} руб.</p>
//       </div>
//     </>
//   );
// }

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// export default function ProductPage() {
//   const location = useLocation();
//   const productData = location.state?.productData;

//   if (!productData) {
//     return <p>Данные о продукте не найдены.</p>;
//   }

//   return (
//     <>
//       <h2>Страница товара {productData.id}</h2>
//       <div>
//         <img src={productData.image} alt={`картинка товара ${productData.name}`} />
//         <h3>{productData.name}</h3>
//         <p>Цена до: {productData.price_before} руб.</p>
//         <p>Цена после: {productData.price_after} руб.</p>
//       </div>
//     </>
//   );
// }