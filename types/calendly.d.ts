export {};

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}
