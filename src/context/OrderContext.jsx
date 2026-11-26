import React, { createContext, useContext, useState, useEffect } from 'react';
import { getMultiProductWhatsAppUrl } from '../utils/whatsapp';

const OrderContext = createContext();

const STORAGE_KEY = 'radha_rani_order_tray_v1';
const CUSTOMER_STORAGE_KEY = 'radha_rani_customer_info_v1';

export function OrderProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to parse order tray from localStorage', e);
      return [];
    }
  });

  const [customerDetails, setCustomerDetails] = useState(() => {
    try {
      const saved = localStorage.getItem(CUSTOMER_STORAGE_KEY);
      return saved ? JSON.parse(saved) : { name: '', phone: '', address: '', notes: '' };
    } catch (e) {
      return { name: '', phone: '', address: '', notes: '' };
    }
  });

  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save order tray to localStorage', e);
    }
  }, [items]);

  // Sync customerDetails to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(customerDetails));
    } catch (e) {
      console.error('Failed to save customer details to localStorage', e);
    }
  }, [customerDetails]);

  // Auto clear toast after 3 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  /**
   * Parse numeric price from pack string (e.g. "250 g - ₹120" -> 120, or "₹12/piece" -> 12)
   */
  const extractUnitPrice = (product, packString) => {
    if (packString) {
      const match = packString.match(/₹[\d,]+/);
      if (match) {
        return parseInt(match[0].replace(/[^\d]/g, ''), 10) || 0;
      }
    }
    if (product.startingPrice) {
      return parseInt(String(product.startingPrice).replace(/[^\d]/g, ''), 10) || 0;
    }
    return 0;
  };

  /**
   * Add a product pack to the order tray
   */
  const addToOrder = (product, selectedPack = null, quantity = 1) => {
    const pack = selectedPack || (product.packOptions && product.packOptions[0]) || 'Standard';
    const unitPrice = extractUnitPrice(product, pack);
    const itemId = `${product.id}__${pack}`;
    const addQty = Math.max(1, parseInt(quantity, 10) || 1);

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === itemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + addQty,
        };
        return updated;
      } else {
        const newItem = {
          id: itemId,
          productId: product.id,
          name: product.name,
          categoryName: product.categoryName || 'Authentic Foods',
          pack,
          unitPrice,
          quantity: addQty,
          image: product.image,
        };
        return [...prevItems, newItem];
      }
    });

    const sizeOnly = pack.includes(' - ') ? pack.split(' - ')[0] : pack;
    setToastMessage(`Added ${addQty} × ${product.name} (${sizeOnly}) to your Order Tray!`);
  };

  /**
   * Update quantity of an item in the order tray
   */
  const updateQuantity = (itemId, newQty) => {
    const qty = parseInt(newQty, 10);
    if (qty <= 0) {
      removeFromOrder(itemId);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, quantity: qty } : item))
    );
  };

  /**
   * Remove item from order tray
   */
  const removeFromOrder = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  /**
   * Clear the entire order tray
   */
  const clearOrder = () => {
    setItems([]);
  };

  /**
   * Computed total quantity of items
   */
  const totalCount = items.reduce((acc, item) => acc + (parseInt(item.quantity, 10) || 0), 0);

  /**
   * Computed grand total amount in ₹
   */
  const totalAmount = items.reduce(
    (acc, item) => acc + (item.unitPrice || 0) * (parseInt(item.quantity, 10) || 0),
    0
  );

  /**
   * Open the multi-product WhatsApp chat
   */
  const checkoutWhatsApp = () => {
    if (items.length === 0) return;
    const url = getMultiProductWhatsAppUrl(items, customerDetails);
    window.open(url, '_blank');
  };

  return (
    <OrderContext.Provider
      value={{
        items,
        customerDetails,
        setCustomerDetails,
        isOrderDrawerOpen,
        setIsOrderDrawerOpen,
        openOrderDrawer: () => setIsOrderDrawerOpen(true),
        closeOrderDrawer: () => setIsOrderDrawerOpen(false),
        addToOrder,
        updateQuantity,
        removeFromOrder,
        clearOrder,
        totalCount,
        totalAmount,
        checkoutWhatsApp,
        toastMessage,
        setToastMessage,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
}
