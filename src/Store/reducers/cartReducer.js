import Item1 from "../../images/item1.jpg";
import Item2 from "../../images/item2.jpg";
import Item3 from "../../images/item3.jpg";
import Item4 from "../../images/item4.jpg";
import Item5 from "../../images/item5.jpg";
import Item6 from "../../images/item6.jpg";
import Item7 from "../../images/item7.jpg";
import Item8 from "../../images/item8.jpg";
import Item9 from "../../images/item9.jpg";

import {
  ADD_TO_CART,
  SUB_QUANTITY,
  ADD_SHIPPING,
  ADD_QUANTITY,
  REMOVE_ITEM,
} from "../actions/Types/Types";

const initState = {
  items: [
    {
      id: 1,
      title: "UCL Final ISTANBUL LEAGUE Ball",
      desc:
        "The lush graphics on this adidas soccer ball flow from the UEFA Champions League official ball. Its seamless design and FIFA stamp mean you'll have no excuses when you send it over the fence during shooting practice",
      price: 110,
      img: Item1,
    },
    {
      id: 2,
      title: "Blue Rounded Shirt",
      desc:
        "Round Neck Line, Short Sleeves, Plain Front and Back,  Double needle stitching of hem and neckline",
      price: 80,
      img: Item2,
    },
    {
      id: 3,
      title: "Asus Laptop",
      desc:
        "flat asus laptop with 16gb RAM, processor intel i5-3210M CPU @ 2.50GHz 2.50GHz",
      price: 600,
      img: Item3,
    },
    {
      id: 4,
      title: "Roounded Blue Shirt",
      desc:
        "Round Neck Line, Short Sleeves, Plain Front and Back,  Double needle stitching of hem and neckline",
      price: 85,
      img: Item4,
    },
    {
      id: 5,
      title: "Rounded White Shirt",
      desc:
        "Round Neck Line, Short Sleeves, Plain Front and Back,  Double needle stitching of hem and neckline",
      price: 92,
      img: Item5,
    },
    {
      id: 6,
      title: "Samsung Airpods",
      desc:
        "Wireless Earbuds,Bluetooth Headphones Mini In-Ear Headsets Sports Earphone with 2 True Wireless Earbuds",
      price: 160,
      img: Item6,
    },
    {
      id: 7,
      title: "Rolex 18k yellow gold fluted bezel",
      desc:
        " 18K yellow gold fluted bezel, mother of pearl dial, diamond hour markers",
      price: 1100,
      img: Item7,
    },
    {
      id: 8,
      title: "Men's BasketBall shoe",
      desc: "Adidas Harden Vol.4 Pride Men's BasketBall shoe",
      price: 200,
      img: Item8,
    },
    ,
    {
      id: 9,
      title: "Samsung S9 Plus",
      desc:
        "Samsung Galaxy S9 Android smartphone. Announced Feb 2018. Features 5.8″ Super AMOLED",
      price: 500,
      img: Item9,
    },
  ],
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 10,
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 10,
    };
  } else {
    return state;
  }
};

export default cartReducer;
