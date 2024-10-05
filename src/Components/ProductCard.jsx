import PropTypes from "prop-types";

const Product = ({
  id,
  title,
  images,
  price,
  description,
  category,
  rating,
  stock,
  addCart,
  removeCart,
  isInCart = false,
}) => {
  return (
    <div className="card border-3 border-subtle-black h-100 ">
      <img
        src={images}
        alt={title}
        className="img-card-top"
        style={{ height: 200, objectFit: "contain" }}
      />
      <div className="card-body  d-flex flex-column">
        <h4 className="card-title text-center mb-3 mt-3 text-3xl font-bold">
          {title}
        </h4>
        <h5 className="card-text text-center">Category : {category}</h5>
        <h3 className="card-text text-center">Price : {price}</h3>

        <h4 className="card-text text-center">Stock : {stock}</h4>
        <h5 className="card-text text-center">Rating: {rating}</h5>

        <div className=" w-100 text-center mt-2 mb-1">
          {isInCart ? (
            <button
              className="btn btn-danger w-10/12 htransition-all hover:scale-110 duration-300 "
              onClick={() => removeCart(id)}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="btn btn-primary w-10/12 transition-all hover:scale-110 duration-500 "
              onClick={() =>
                addCart({
                  id,
                  title,
                  images,
                  price,
                  description,
                  category,
                  rating,
                  quantity: 1,
                })
              }
            >
              ADD To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  stock: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
  isInCart: PropTypes.bool,
};

export default Product;
