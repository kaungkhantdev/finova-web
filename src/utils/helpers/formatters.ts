export function formatPathToTitle(path: string) {
  return path
    .replace(/^\/+/, '') // Remove leading slashes
    .split('-')           // Split by dash
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' ')            // Join with space
}
