import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // <-- IMPORT

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: () => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
const [selectedSellUID, setSelectedSellUID] = useState("");

const handleOpenSellWindow = (uid) => {
  setIsSellWindowOpen(true);
  setSelectedSellUID(uid);
};

const handleCloseSellWindow = () => {
  setIsSellWindowOpen(false);
  setSelectedSellUID("");
};

const [refreshHoldings, setRefreshHoldings] = useState(false);

const triggerHoldingsRefresh = () => {
  setRefreshHoldings(prev => !prev);
};

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,

        refreshHoldings,
        triggerHoldingsRefresh
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedSellUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;