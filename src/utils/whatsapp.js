import { BUSINESS_INFO } from '../data/businessInfo';

/**
 * Generate a pre-filled WhatsApp link
 * @param {string} message - Custom message or product inquiry text
 * @returns {string} WhatsApp direct URL
 */
export function getWhatsAppUrl(message = '') {
  const defaultText = `Hello Global Offset, I am looking for printing services in Patna. Please share details and pricing.`;
  const textToSend = message.trim() || defaultText;
  return `https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=${encodeURIComponent(textToSend)}`;
}

/**
 * Generate a product-specific WhatsApp inquiry URL
 * @param {string} productName - e.g., 'Diary Printing'
 * @param {string} [customDetails] - Optional quantity or spec details
 */
export function getProductWhatsAppUrl(productName, customDetails = '') {
  let message = `Hello Global Offset, I am interested in ${productName}. Please share pricing and details.`;
  if (customDetails) {
    message += ` Details: ${customDetails}`;
  }
  return getWhatsAppUrl(message);
}

/**
 * Generate a phone call link
 */
export function getPhoneUrl() {
  return `tel:${BUSINESS_INFO.contact.phone}`;
}
