export type UiDispatchType =
  | {
      type: "TOOGLE_MOBILE_MENU";
      anchor: string;
      open: boolean;
    }
  | {
      type: "TOOGLE_THEME";
    };

export const toogleMobileMenu = (
  anchor: string,
  open: boolean
): UiDispatchType => ({
  type: "TOOGLE_MOBILE_MENU",
  anchor,
  open,
});

export const toogleTheme = (): UiDispatchType => ({
  type: "TOOGLE_THEME",
});
