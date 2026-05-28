export interface Menu {
    id: number;
    name: string;
    isBest: boolean;
    price: number;  
    ingredients: string;
}

export interface Store {
    rank: number;
    id: number;
    name: string;
    rate: number;
    reviewCnt: number;
    minDeliveryTime: number;
    maxDeliveryTime: number;
    minDeliveryPrice: number;
    deliveryFee: number;
    menus: Menu[];
}

const API_URL = "http://localhost:3001";

export const getStores = async (): Promise<Store[]> => {
    const res = await fetch(`${API_URL}/stores`);

    if (!res.ok) {
        throw new Error("가게 목록 불러오기 실패");
    }

    return res.json();
};

export const getStoreInfo = async (storeId: number): Promise<Store> => {
    const res = await fetch(`${API_URL}/stores/${storeId}`);

    if (!res.ok) {
        throw new Error("가게 정보 불러오기 실패");
    }

    return res.json();
};
