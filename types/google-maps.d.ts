/** Minimal Maps JS types for amenity map (full types via @types/google.maps at build). */
export {};

declare global {
  interface Window {
    google?: typeof google;
  }
}
