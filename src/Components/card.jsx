import { useState } from "react";

export const Card = ({ product }) => {
  const [isClicked, setIsClicked] = useState(false);

  function handleProductClick() {
    const item = document.getElementById(`${product.id}`);
    if (isClicked) {
      setIsClicked(false);
      item.classList.toggle("product__card-toggle");
    } else {
      setIsClicked(true);
      item.classList.toggle("product__card-toggle");
    }
  }

  return (
    <li className="product__item">
      {product.disabled ? (
        <>
          <div className="product__card product__card-disabled" id={product.id}>
            <p className="product__text ">Сказочное заморское яство</p>
            <h1 className="product__title">Нямушка</h1>
            <p className="product__title product__title-small">
              {product.filling}
            </p>
            <p className="product__text product__text-small">
              <span>{product.portions}</span> порций
            </p>
            <p className="product__text product__text-small">
              <span>{product.weight > 1 && product.weight}</span>{" "}
              {product.gifts}
            </p>
            <div className="product__weight">
              {product.weight}
              <span>кг</span>
            </div>
            <div className="product__shadow"></div>
          </div>
          <div className="product__footer">
            {isClicked ? (
              <p>{product.footer}</p>
            ) : (
              <p className="product__footer-disabled">
                Печалька, {product.filling} закончился.
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          <div
            className="product__card"
            id={product.id}
            onClick={handleProductClick}
          >
            <p className="product__text ">Сказочное заморское яство</p>
            <h1 className="product__title">Нямушка</h1>
            <p className="product__title product__title-small">
              {product.filling}
            </p>
            <p className="product__text product__text-small">
              <span>{product.portions}</span> порций
            </p>
            <p className="product__text product__text-small">
              <span>{product.weight > 1 && product.weight}</span>{" "}
              {product.gifts}
            </p>
            <div className="product__weight">
              {product.weight}
              <span>кг</span>
            </div>
          </div>
          <div className="product__footer">
            {isClicked ? (
              <p>{product.footer}</p>
            ) : (
              <p>
                Чего сидишь? Порадуй котэ,{" "}
                <a href="#!" onClick={handleProductClick}>
                  купи.
                </a>
              </p>
            )}
          </div>
        </>
      )}
    </li>
  );
};
