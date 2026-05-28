import type { Store } from "../../api/api";
import StoreCard from "./StoreCard";

interface StoreListProps {
  stores: Store[];
  loading: boolean;
  editStore: (id: string, name: string) => Promise<void>;
  deleteStore: (id: string) => Promise<void>;
}

const StoreList = ({
  stores,
  loading,
  editStore,
  deleteStore,
}: StoreListProps) => {
  if (loading) {
    return <div>로딩 중</div>;
  }

  return (
    <div className="flex flex-col">
      {stores.map((store) => (
        <StoreCard
          rank={store.rank}
          key={store.id}
          id={store.id}
          name={store.name}
          rate={store.rate}
          reviewCnt={store.reviewCnt}
          minDeliveryTime={store.minDeliveryTime}
          maxDeliveryTime={store.maxDeliveryTime}
          deliveryFee={store.deliveryFee}
          editStore={editStore}
          deleteStore={deleteStore}
        />
      ))}
    </div>
  );
};

export default StoreList;
