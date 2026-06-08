/**
 * Convert base64 string to data URL for use in img src
 * @param {string} base64String - The base64 encoded image string
 * @param {string} mimeType - The MIME type of the image (default: image/jpeg)
 * @returns {string} - Data URL that can be used in img src
 */
export const base64ToDataUrl = (base64String, mimeType = "image/jpeg") => {
  return `data:${mimeType};base64,${base64String}`;
};

/**
 * Convert File object to base64 string
 * @param {File} file - The file object to convert
 * @returns {Promise<string>} - Promise that resolves to base64 string
 */
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      resolve(base64String);
    };
    reader.onerror = reject;
  });
};

/**
 * Get MIME type from image data
 * @param {string} base64String - The base64 string
 * @returns {string} - MIME type of the image
 */
export const getMimeTypeFromBase64 = (base64String) => {
  // Try to detect from the base64 signature
  const signatures = {
    "/9j/": "image/jpeg",
    "iVBORw0KGgo": "image/png",
    "R0lGODlh": "image/gif",
    "UklGRg": "image/webp",
  };

  for (const [sig, mimeType] of Object.entries(signatures)) {
    if (base64String.startsWith(sig)) {
      return mimeType;
    }
  }

  return "image/jpeg"; // default fallback
};
