import MenuItem from "./MenuItem";
import type { Menu } from "../../api/api";

interface MenulistProps {
  menus: Menu[];
  storename: string;
}

const Menulist = ({ menus, storename }: MenulistProps) => {
  return (
    <div className="flex flex-col">
      {menus.map((menu) => (
        <MenuItem
          key={menu.id}
          id={menu.id}
          storename={storename}
          name={menu.name}
          price={menu.price}
          ingredients={menu.ingredients}
          isBest={menu.isBest}
        />
      ))}
    </div>
  );
};

export default Menulist;
