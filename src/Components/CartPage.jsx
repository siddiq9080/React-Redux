
import { useSelector, useDispatch } from "react-redux";

const CartPage = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const getTotalPrice = () =>
    count.reduce((total, item) => total + item.price * item.quantity, 0);

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: productId, quantity },
    });
  };

  return (
    <div className="container  mb-5 pb-5">
      <h2 className=" my-5 md:my-24 text-center text-primary text-3xl font-bold md:text-4xl">
        Shopping Cart Section
      </h2>

      {count.length === 0 ? (
        <h3 className=" text-center text-danger text-3xl md:text-7xl ">
          Your cart is empty 😔😔😔.
        </h3>
      ) : (
        <div>
          {count.map((item) => (
            <div key={item.id} className="mb-3">
              <div className="card p-3 text-center">
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <img
                      src={item.images}
                      alt={item.title}
                      className="card-img-top object-fit-contain hover:scale-110 transition-all"
                      style={{ height: 150 }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-2xl font-bold md:text-3xl">{item.title}</h5>
                    <h5 className="py-1">{item.category}</h5>
                    <h6>{item.description}</h6>
                  </div>
                  <div className="col-md-3 ">
                    <h4 className="py-2">Price: ${item.price.toFixed(2)}</h4>
                    <h4 className="pb-2">Quantity: {item.quantity}</h4>

                    <div className="mt-2">
                      <button
                        className="btn btn-secondary hover:scale-110 transition-all"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-secondary ms-2 hover:scale-110 transition-all"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        disabled={item.quantity === 5}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-danger mt-2 hover:scale-110 transition-all"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary bg-warning-subtle mt-5 pt-3 fixed-bottom text-end pe-5">
        <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
        <p className="text-success">Shipping is free!</p>
      </div>
    </div>
  );
};

export default CartPage;
