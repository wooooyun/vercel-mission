import BackSpaceTop from "../../components/FixedBar/BackSpaceTop";
import OrderBar from "../../components/FixedBar/OrderBar";
import { AddStore } from "../../components/StoreList/AddStore";
import Menutitle from "../../components/StoreList/Menutitle";
import StoreList from "../../components/StoreList/StoreList";
import { useStores } from "../../hooks/useStores";

const Store = () => {
  const { stores, loading, addStore, editStore, deleteStore } = useStores();
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <BackSpaceTop />
        <Menutitle />
        <StoreList 
          stores={stores}
          loading={loading}
          editStore={editStore}
          deleteStore={deleteStore}
        />
        <AddStore addStore={addStore} />
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
