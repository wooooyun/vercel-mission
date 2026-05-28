import { useEffect, useState } from "react";
import type { Store } from "../api/api";

const API_URL = "http://localhost:3001";

export const useStores = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(`${API_URL}/stores`);
        const storesData: Store[] = await response.json();
        setStores(storesData);
      } catch (error) {
        console.error("가게 목록 불러오기 실패", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  const addStore = async (name: string) => {
    try {
      const newStore = {
        name,
        rate: 0,
        reviewCnt: 0,
        minDeliveryTime: 20,
        maxDeliveryTime: 35,
        minDeliveryPrice: 10000,
        deliveryFee: 2000,
        menus: [],
      };

      const res = await fetch(`${API_URL}/stores`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStore),
      });

      if (!res.ok) {
        throw new Error("가게 추가 실패");
      }

      const newPost = await res.json();
      setStores((prevStores) => [...prevStores, newPost]);
    } catch (error) {
      console.error("가게 추가 실패", error);
    }
  };

  const editStore = async (id: string, name: string) => {
    try {
      const res = await fetch(`${API_URL}/stores/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (!res.ok) {
        throw new Error("가게 수정 실패");
      }

      const updatedStore = await res.json();

      setStores((prevStores) =>
        prevStores.map((store) =>
          store.id === updatedStore.id ? updatedStore : store,
        ),
      );
    } catch (error) {
      console.error("가게 수정 실패", error);
    }
  };

  const deleteStore = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/stores/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("가게 삭제 실패");
      }

      const deletedStore = await res.json();
      setStores((prevStores) =>
        prevStores.filter((store) => store.id !== deletedStore.id),
      );
    } catch (error) {
      console.error("가게 삭제 실패", error);
    }
  };

  return { stores, loading, addStore, editStore, deleteStore };
};
