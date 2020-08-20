import * as React from 'react';

export interface Selection {
  id: string;
  picUrl: string;
  title: string;
  selected: boolean;
}

export interface SelectionContextEntity {
  selection: Selection[];
  setSelection: (selection: Selection) => void;
}

export const ShoppingCartContext = React.createContext<SelectionContextEntity>({
  selection: [],
  setSelection: (selection: Selection) => {},
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

  return (
    <ShoppingCartContext.Provider value={{ selection, setSelection: toggleItemSelection }}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
