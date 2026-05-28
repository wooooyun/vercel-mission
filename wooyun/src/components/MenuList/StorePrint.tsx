import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStoreInfo, type Store } from "../../api/api";
import StoreInfo from "./StoreInfo";
import Menulist from "./Menulist";

const StorePrint = () => {
  const { storeId } = useParams();
  const [store, setStore] = useState<Store | null>(null);

  useEffect(() => {
    const fetchStoreInfo = async () => {
      try {
        const storeData = await getStoreInfo(Number(storeId));
        setStore(storeData);
      } catch (error) {
        console.error("가게 정보 불러오기 실패", error);
      }
    };

    fetchStoreInfo();
  }, [storeId]);

  if (!store) {
    return <div></div>;
  }

  return (
    <div>
      <StoreInfo
        name={store.name}
        rate={store.rate}
        reviewCnt={store.reviewCnt}
        minDeliveryPrice={store.minDeliveryPrice}
        minDeliveryTime={store.minDeliveryTime}
        maxDeliveryTime={store.maxDeliveryTime}
      />
      <Menulist menus={store.menus} storename={store.name} />
    </div>
  );
};

export default StorePrint;
