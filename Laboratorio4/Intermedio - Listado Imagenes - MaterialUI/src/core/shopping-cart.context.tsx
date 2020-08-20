import * as React from 'react';

export interface Selection {
  id: string;
  picUrl: string;
  title: string;
  price: number;
  selected: boolean;
}

export interface SelectionContextEntity {
  selection: Selection[];
  setSelection: (selection: Selection) => void;
  eraseCart: () => void;
}

export const ShoppingCartContext = React.createContext<SelectionContextEntity>({
  selection: [],
  setSelection: (selection: Selection) => {},
  eraseCart: () => {},
});

export const ShoppingCartContextProvider = props => {
  const [selection, setSelection] = React.useState<Selection[]>([]);

  const toggleItemSelection = (selectedItem: Selection) => {
    const selectedItemIndex = selection.findIndex(item => item.id === selectedItem.id);
    if (selectedItemIndex === -1) {
      setSelection([...selection, selectedItem]);
    } else {
      setSelection(selection.filter(e => e.id !== selectedItem.id));
    }
  };

  const eraseCart = () => setSelection([]);

  return (
    <ShoppingCartContext.Provider value={{ selection, setSelection: toggleItemSelection, eraseCart }}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
