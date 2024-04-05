import { useDispatch, useSelector } from "react-redux";
import useStore from "../hooks/hooks";
import { addCart, removeItem } from "../global/state";
import { makePay } from "../api/API";

const CartScreen = () => {
  const dispatch = useDispatch();
  //   const { data: storeData } = useStore();
  const storeData = useSelector((state: any) => state.cart);

  const value = storeData
    .map((el: any) => {
      return el.price * el.qty;
    })
    .reduce((a: number, b: number) => {
      return a + b;
    });

  const makeMyPayment = () => {
    makePay(value).then((res: any) => {
      console.log(res);
      if (res.status === 200) {
        location.replace(res.data.data.authorization_url);
      }
    });
  };

  return (
    <div>
      <main className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {storeData?.map((props: any) => (
          <section
            key={props._id}
            className="border min-w-[250px] h-[310px] rounded-md"
          >
            <img
              src={props.image}
              className="bg-red-500 w-full h-[200px] rounded-t-md"
            />
            <div className="px-2">
              <p>Name: {props.name}</p>
              <p>Price: ₦{props.price.toLocaleString()}</p>

              <div className="w-full flex items-center justify-between">
                <button
                  className="mt-4 text-[12px] bg-black text-white px-4 py-2 rounded-sm mb-1"
                  onClick={() => {
                    dispatch(addCart(props));
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="mt-4 text-[12px] bg-red-500 text-white px-4 py-2 rounded-sm mb-1"
                  onClick={() => {
                    dispatch(removeItem(props));
                  }}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </section>
        ))}
      </main>{" "}
      <main className="flex w-full justify-center">
        <section className="border rounded-md h-[70px] w-[60%] mt-20 items-center flex justify-between px-10">
          <div>Total Cost: ₦{value.toLocaleString()}</div>
          <button
            className="bg-black text-white px-5 py-2"
            onClick={makeMyPayment}
          >
            Checkout
          </button>
        </section>
      </main>
    </div>
  );
};

export default CartScreen;
