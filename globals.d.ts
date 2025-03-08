declare const grecaptcha: {
  render: (container: HTMLElement, options: { sitekey: string; callback: (token: string) => void; }) => void;
  ready: (callback: () => void) => void;
};