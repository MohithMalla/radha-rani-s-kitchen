export const PRIMARY_PHONE = "9879687856";
export const SECONDARY_PHONE = "9989365006";
export const WHATSAPP_NUMBER = "919879687856";

/**
 * Builds a direct wa.me link with encoded text message.
 */
export function getWhatsAppUrl(message) {
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}

/**
 * Builds a clean, professional customer message for a specific product.
 */
export function getProductWhatsAppUrl(product, selectedPack = null, quantity = 1) {
  const lines = [
    `Hello Radha Rani's Kitchen,`,
    ``,
    `I am interested in ordering:`,
    `* Item: *${product.name}*`,
    `* Category: ${product.categoryName}`,
  ];

  if (selectedPack) {
    lines.push(`* Pack / Size: ${selectedPack}`);
  }
  if (quantity > 1) {
    lines.push(`* Quantity: ${quantity}`);
  }

  lines.push(``);
  lines.push(`Could you please share the pricing, availability, and delivery details in Warangal? Thank you!`);

  return getWhatsAppUrl(lines.join('\n'));
}

/**
 * Builds a clean, professional catering enquiry message.
 */
export function getCateringWhatsAppUrl({ name, phone, eventDate, guestCount, serviceType, notes }) {
  const lines = [
    `Hello Radha Rani's Kitchen,`,
    ``,
    `I would like to enquire about Catering & Bulk Order services:`,
    `--------------------------------------`,
    `* Name: ${name ? name.trim() : 'Customer'}`,
    `* Phone: ${phone ? phone.trim() : 'Provided on WhatsApp'}`,
    `* Event Date: ${eventDate || 'To be decided'}`,
    `* Expected Guests / Quantity: ${guestCount || 'Please advise'}`,
    `* Service Type: ${serviceType || 'Pure Veg Catering'}`,
  ];

  if (notes && notes.trim()) {
    lines.push(`* Special Requests / Menu Notes: ${notes.trim()}`);
  }

  lines.push(`--------------------------------------`);
  lines.push(`Could you please provide the package options and pricing for Warangal / Hanamkonda / Kazipet? Thank you!`);

  return getWhatsAppUrl(lines.join('\n'));
}

/**
 * Customer-friendly preset messages for key actions on the website.
 */
export function getCustomerWhatsAppUrl(intentType = "general", customDetail = "") {
  switch (intentType) {
    case "order_now":
    case "header_order":
      return getWhatsAppUrl(
        `Hello Radha Rani's Kitchen,\n\nI would like to place an order for traditional pure vegetarian food. Could you please share today's menu, prices, and delivery options in Warangal?`
      );

    case "floating_chat":
      return getWhatsAppUrl(
        `Hello Radha Rani's Kitchen,\n\nI have an enquiry regarding your traditional food items and bulk roti supply. Could you please assist me?`
      );

    case "wholesale_rotis":
      return getWhatsAppUrl(
        `Hello Radha Rani's Kitchen,\n\nI would like to enquire about your Wholesale Roti Supply (Phulkas, Chapatis & Jowar Rotis) for daily hostel/restaurant/event supply. Could you please share your bulk rates and delivery timings?`
      );

    case "prasadams":
      return getWhatsAppUrl(
        `Hello Radha Rani's Kitchen,\n\nI would like to enquire about homemade festive prasadams (Temple Pulihora, Chakkera Pongali, Daddojanam) for an upcoming pooja/vratam. Please share the quantities and booking details.`
      );

    case "sweets_snacks":
      return getWhatsAppUrl(
        `Hello Radha Rani's Kitchen,\n\nI would like to enquire about traditional Telangana sweets and snacks (Sakinalu, Ariselu, Sunnundalu, Chekkalu). Please share the pack options and prices.`
      );

    case "catering_service":
      return getWhatsAppUrl(
        `Hello Radha Rani's Kitchen,\n\nI would like to get a pure vegetarian catering quote for an upcoming function in Warangal. Could you please share your menu packages and availability?`
      );

    case "location_visit":
      return getWhatsAppUrl(
        `Hello Radha Rani's Kitchen,\n\nI would like to know more about your kitchen location at Arepally, Warangal and direct pickup timings. Please share the details.`
      );

    case "service_category":
      return getWhatsAppUrl(
        `Hello Radha Rani's Kitchen,\n\nI would like to enquire about your services for "${customDetail || 'Pure Veg Telugu Delicacies'}". Could you please share more information?`
      );

    default:
      return getWhatsAppUrl(
        `Hello Radha Rani's Kitchen,\n\nI would like to enquire about your traditional Telugu pure vegetarian food services in Warangal. Could you please share the details?`
      );
  }
}

/**
 * Backwards compatibility helper
 */
export function getGeneralWhatsAppUrl(subject = "General Enquiry") {
  // If a descriptive category was passed
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
