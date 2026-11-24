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
 * Builds a WhatsApp enquiry link for a specific product.
 */
export function getProductWhatsAppUrl(product, selectedPack = null, quantity = 1) {
  const packStr = selectedPack ? ` | Pack/Size: ${selectedPack}` : '';
  const qtyStr = quantity > 1 ? ` (Qty: ${quantity})` : '';
  const message = `Namaste Radha Rani's Kitchen! 🙏\n\nI would like to enquire about:\n*${product.name}* (${product.categoryName})\n${packStr}${qtyStr}\n\nPlease share the pricing, availability, and delivery details in Warangal/Hanamkonda/Kazipet. Thank you!`;
  return getWhatsAppUrl(message);
}

/**
 * Builds a WhatsApp enquiry link for catering or bulk order.
 */
export function getCateringWhatsAppUrl({ name, phone, eventDate, guestCount, serviceType, notes }) {
  const message = `Namaste Radha Rani's Kitchen! 🙏\n\n*NEW CATERING / BULK ENQUIRY*\n━━━━━━━━━━━━━━━━━━━━\n👤 *Customer Name:* ${name || 'Customer'}\n📞 *Phone:* ${phone || 'Not provided'}\n📅 *Event Date:* ${eventDate || 'Flexible'}\n👥 *Guest Count:* ${guestCount || 'Not specified'}\n🍲 *Service Requested:* ${serviceType || 'Catering Services'}\n📝 *Specific Requirements / Menu Notes:* ${notes || 'Standard pure veg Telugu menu'}\n━━━━━━━━━━━━━━━━━━━━\nPlease share the menu packages, pricing quote, and booking details. Thank you!`;
  return getWhatsAppUrl(message);
}

/**
 * Builds a general enquiry WhatsApp URL.
 */
export function getGeneralWhatsAppUrl(subject = "General Enquiry") {
  const message = `Namaste Radha Rani's Kitchen! 🙏\n\nI am contacting you regarding *${subject}*. Please let me know more about your traditional Telugu pure vegetarian food services in Warangal.`;
  return getWhatsAppUrl(message);
}
