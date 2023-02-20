import CustomerPage from "./components/customer/customer";
import ProductPage from "./components/product/product";
import PurchaseOrders from "./components/purchaseOrder/purchaseOrders";
import VendorPage from "./components/vendor/vendor";
import AvailableStock from "./components/stock/availableStock";
import { Route,Routes  } from "react-router-dom";
import Navigate from "./components/navigate/navigate";
import Bill from "./components/bill/bill";
import CustomizedSnackbars  from "./Message";
import {useState} from 'react';

function App() {
  
  const [messageContent, setMessageContent] = useState(
    { message: "", severity: "", open: false }
  );

  return (
    <>
   
  <Navigate />
      
      <Routes>
        <Route exact path="/" element={<AvailableStock setMessageContent={setMessageContent}/>} />
          <Route exact path="/purchaseorder" element={<PurchaseOrders setMessageContent={setMessageContent}/>} />
          <Route exact path="/productpage" element={<ProductPage setMessageContent={setMessageContent}/>} />
          <Route exact path="/vendor" element={<VendorPage setMessageContent={setMessageContent} />} />
          <Route exact path="/customer" element={<CustomerPage setMessageContent={setMessageContent}/>} />
          <Route exact path="/selling" element={<Bill setMessageContent={setMessageContent}/>} />
      </Routes>
     <CustomizedSnackbars props={messageContent} setMessageContent={setMessageContent} />
    </>
  );
}

export default App;
