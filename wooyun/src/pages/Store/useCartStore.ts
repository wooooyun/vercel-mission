import { create } from "zustand";

interface Menu {
  id: number;
  storename: string;
  name: string;
  price: number;
  ingredients: string;
  count: number;
}

interface addMenuType {
  id: number;
  storename: string;
  name: string;
  price: number;
  ingredients: string;
}

interface CartState {
  menus: Menu[];
  warningMessage: string;

  addMenu: (menu: addMenuType) => void;
  initializeMenu: () => void;
}

const initialState: Pick<CartState, "menus"> = {
  menus: [],
};

const useCartStore = create<CartState>((set) => ({
  menus: initialState.menus,
  warningMessage: "",

  addMenu: (menu) => {
    set((state) => {
      const existMenu = state.menus.find((item) => item.id === menu.id);
      const currentStoreName = state.menus[0]?.storename;

      if (currentStoreName && currentStoreName !== menu.storename) {
        const alertMessage = window.confirm(
          "주문서에는 같은 가게만 담을 수 있어요 \n새로 담고 이전에 담은 메뉴는 삭제할까요?",
        );
        
        if(!alertMessage) {
          return state;
        }

        return {
          menus: [{...menu, count: 1 }],
        };
      }

      if (existMenu) {
        return {
          menus: state.menus.map((item) =>
            item.id === menu.id && item.storename === menu.storename
              ? { ...item, count: item.count + 1 }
              : item,
          ),
        };
      }

      return {
        menus: [...state.menus, { ...menu, count: 1 }],
      };
    });
  },

  initializeMenu: () => {
    set({
      menus: initialState.menus,
    });
  },
}));

export default useCartStore;
