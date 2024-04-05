import { useDispatch } from "react-redux";
import useStore from "../hooks/hooks";
import { addCart } from "../global/state";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { verifyData } from "../api/API";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { data: storeData } = useStore();
  const { search } = useLocation();
  console.log(search.split("reference=")[1]);

  useEffect(() => {
    if (search) {
      verifyData(search.split("reference=")[1]).then((res) => {
        if (res.status === 200) {
          console.log(res);
        }
      });
    }
  }, []);

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

              <button
                className="mt-4 text-[12px] bg-black text-white px-4 py-2 rounded-sm mb-1"
                onClick={() => {
                  dispatch(addCart(props));
                }}
              >
                Add to Cart
              </button>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default HomeScreen;
