export { }

declare global {
  interface Window {
    deferredPrompt: any;
  }
  interface HTMLImageElement {
    lazySrc: string
  }

}