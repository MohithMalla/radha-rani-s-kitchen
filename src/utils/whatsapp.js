export const PRIMARY_PHONE = "9989365006";
export const SECONDARY_PHONE = "9879687856";
export const WHATSAPP_NUMBER = "919989365006";

/**
 * Builds a direct wa.me link with cleanly encoded text message.
 */
export function getWhatsAppUrl(message) {
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}

/**
 * Builds a clean, professional, respectful customer message for a single product order.
 * Strictly avoids redundant questions when price & pack are already known.
 */
export function getProductWhatsAppUrl(product, selectedPack = null, quantity = 1) {
  const packInfo = selectedPack || (product.packOptions && product.packOptions[0]) || '';
  const priceMatch = packInfo.match(/₹[\d,]+(\/piece)?/);
  const priceStr = priceMatch ? priceMatch[0] : (product.startingPrice ? `₹${product.startingPrice}` : '');
  const sizeOnly = packInfo.includes(' - ') ? packInfo.split(' - ')[0] : packInfo;
  const numQty = parseInt(quantity, 10) || 1;

  let unitPriceNum = 0;
  if (priceMatch) {
    unitPriceNum = parseInt(priceMatch[0].replace(/[^\d]/g, ''), 10) || 0;
  } else if (product.startingPrice) {
    unitPriceNum = parseInt(String(product.startingPrice).replace(/[^\d]/g, ''), 10) || 0;
  }

  const lines = [
    `Namaste Radha Rani's Kitchen!`,
    ``,
    `I would like to place an order from your website:`,
    `------------------------------------------`,
    `*ORDER ITEM:*`,
    `* Product: ${product.name}`,
    `* Category: ${product.categoryName || 'Authentic Foods'}`,
    `* Pack / Size: ${sizeOnly || 'Standard'}`,
    `* Price: ${priceStr || (unitPriceNum > 0 ? `₹${unitPriceNum}` : 'As per list')}`,
    `* Quantity: ${numQty}`,
  ];

  if (unitPriceNum > 0) {
    lines.push(`* Total Item Price: ₹${unitPriceNum * numQty}`);
  }

  lines.push(`------------------------------------------`);
  lines.push(`* Delivery Area: Warangal / Hanamkonda / Kazipet`);
  lines.push(``);
  lines.push(`Please confirm order acceptance, preparation time, and delivery or pickup details. Thank you!`);

  return getWhatsAppUrl(lines.join('\n'));
}

/**
 * Builds an official, professional multi-item order invoice for WhatsApp.
 * Handles multiple products with pack sizes, quantities, and calculated grand total.
 */
export function getMultiProductWhatsAppUrl(items = [], customerDetails = {}) {
  let grandTotal = 0;
  let totalQuantity = 0;

  const lines = [
    `Namaste Radha Rani's Kitchen!`,
    ``,
    `I would like to place an order for the following items from your website:`,
    `==========================================`,
    `*ORDER BREAKDOWN:*`,
  ];

  items.forEach((item, index) => {
    const qty = parseInt(item.quantity, 10) || 1;
    totalQuantity += qty;

    const unitPrice = item.unitPrice || 0;
    const itemTotal = unitPrice * qty;
    grandTotal += itemTotal;

    const packLabel = item.pack ? (item.pack.includes(' - ') ? item.pack.split(' - ')[0] : item.pack) : 'Standard';

    lines.push(``);
    lines.push(`${index + 1}. *${item.name}* (${item.categoryName || 'Food'})`);
    lines.push(`   * Pack / Size: ${packLabel}${unitPrice > 0 ? ` (@ ₹${unitPrice})` : ''}`);
    lines.push(`   * Quantity: ${qty}${unitPrice > 0 ? ` = *₹${itemTotal}*` : ''}`);
  });

  lines.push(``);
  lines.push(`==========================================`);
  lines.push(`* Total Items: ${totalQuantity} (${items.length} variety)`);
  if (grandTotal > 0) {
    lines.push(`* Estimated Total: *₹${grandTotal}*`);
  }

  if (customerDetails.name && customerDetails.name.trim()) {
    lines.push(`* Customer Name: ${customerDetails.name.trim()}`);
  }
  if (customerDetails.phone && customerDetails.phone.trim()) {
    lines.push(`* Contact Phone: ${customerDetails.phone.trim()}`);
  }
  if (customerDetails.address && customerDetails.address.trim()) {
    lines.push(`* Delivery Location / Address: ${customerDetails.address.trim()}`);
  } else {
    lines.push(`* Delivery Location: Warangal / Hanamkonda / Kazipet`);
  }
  if (customerDetails.notes && customerDetails.notes.trim()) {
    lines.push(`* Notes / Instructions: ${customerDetails.notes.trim()}`);
  }
  lines.push(`==========================================`);
  lines.push(``);
  lines.push(`Please confirm order availability, preparation time, and delivery or pickup schedule. Thank you!`);

  return getWhatsAppUrl(lines.join('\n'));
}

/**
 * Builds a clean, professional catering enquiry message.
 */
export function getCateringWhatsAppUrl({ name, phone, eventDate, guestCount, serviceType, notes }) {
  const lines = [
    `Namaste Radha Rani's Kitchen!`,
    ``,
    `I would like to enquire about Catering & Bulk Order services:`,
    `------------------------------------------`,
    `* Name: ${name ? name.trim() : 'Customer'}`,
    `* Phone: ${phone ? phone.trim() : 'Provided on WhatsApp'}`,
    `* Event Date: ${eventDate || 'To be decided'}`,
    `* Expected Guests / Quantity: ${guestCount || 'Please advise'}`,
    `* Service Type: ${serviceType || 'Pure Veg Catering'}`,
  ];

  if (notes && notes.trim()) {
    lines.push(`* Special Requests / Menu Notes: ${notes.trim()}`);
  }

  lines.push(`------------------------------------------`);
  lines.push(`* Service Areas: Warangal / Hanamkonda / Kazipet`);
  lines.push(``);
  lines.push(`Could you please share your traditional pure veg menu packages, pricing, and booking details? Thank you!`);

  return getWhatsAppUrl(lines.join('\n'));
}

/**
 * Customer-friendly preset messages for key actions on the website.
 * No robotic phrases like "Website Header Enquiry" or "Instant WhatsApp Order Enquiry".
 */
export function getCustomerWhatsAppUrl(intentType = "general", customDetail = "") {
  switch (intentType) {
    case "order_now":
    case "header_order":
      return getWhatsAppUrl(
        `Namaste Radha Rani's Kitchen!\n\nI would like to place an order for authentic traditional pure vegetarian food. Could you please share today's menu availability and delivery options in Warangal? Thank you!`
      );

    case "floating_chat":
      return getWhatsAppUrl(
        `Namaste Radha Rani's Kitchen!\n\nI am contacting you from your website regarding your homemade traditional sweets, snacks, pickles, and wholesale rotis. Could you please share availability and delivery details in Warangal? Thank you!`
      );

    case "wholesale_rotis":
      return getWhatsAppUrl(
        `Namaste Radha Rani's Kitchen!\n\nI would like to enquire about your Wholesale Bulk Roti Supply (Wheat Phulkas, Chapatis & Jowar Rotis) for hostels, messes, hotels, or events in Warangal & Hanamkonda. Please share your wholesale rates and delivery schedule. Thank you!`
      );

    case "prasadams":
      return getWhatsAppUrl(
        `Namaste Radha Rani's Kitchen!\n\nI would like to enquire about homemade sacred prasadams (Temple Pulihora, Chakkera Pongali, Daddojanam) for an upcoming pooja/vratam in Warangal. Please share available quantities and booking details. Thank you!`
      );

    case "sweets_snacks":
      return getWhatsAppUrl(
        `Namaste Radha Rani's Kitchen!\n\nI would like to enquire about traditional Telangana sweets and snacks (Sakinalu, Ariselu, Sunnundalu, Chekkalu, Laddus). Please share the pack options and prices. Thank you!`
      );

    case "catering_service":
      return getWhatsAppUrl(
        `Namaste Radha Rani's Kitchen!\n\nI would like to get a pure vegetarian catering quote for an upcoming family function/event in Warangal. Could you please share your menu packages and availability? Thank you!`
      );

    case "location_visit":
      return getWhatsAppUrl(
        `Namaste Radha Rani's Kitchen!\n\nI would like to visit your kitchen at Arepally, Warangal for direct pickup. Could you please share your location map link and opening timings? Thank you!`
      );

    case "service_category":
      return getWhatsAppUrl(
        `Namaste Radha Rani's Kitchen!\n\nI would like to enquire about "${customDetail || 'Pure Veg Telugu Delicacies'}". Could you please share availability and delivery details in Warangal? Thank you!`
      );

    default:
      return getWhatsAppUrl(
        `Namaste Radha Rani's Kitchen!\n\nI would like to enquire about your traditional Telugu pure vegetarian food services in Warangal. Could you please assist me? Thank you!`
      );
  }
}

/**
 * Backwards compatibility helper
 */
export function getGeneralWhatsAppUrl(subject = "General Enquiry") {
  if (subject && subject.toLowerCase().includes("roti")) {
    return getCustomerWhatsAppUrl("wholesale_rotis");
  }
  if (subject && subject.toLowerCase().includes("prasadam")) {
    return getCustomerWhatsAppUrl("prasadams");
  }
  if (subject && (subject.toLowerCase().includes("snack") || subject.toLowerCase().includes("sweet"))) {
    return getCustomerWhatsAppUrl("sweets_snacks");
  }
  if (subject && subject.toLowerCase().includes("cater")) {
    return getCustomerWhatsAppUrl("catering_service");
  }
  if (subject && subject.toLowerCase().includes("location")) {
    return getCustomerWhatsAppUrl("location_visit");
  }
  return getCustomerWhatsAppUrl("order_now");
}
