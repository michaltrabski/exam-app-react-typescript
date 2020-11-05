export type UiDispatchType = {
  type: "TOOGLE_MOBILE_MENU";
  anchor: string;
  open: boolean;
};

export const toogleMobileMenu = (
  anchor: string,
  open: boolean
): UiDispatchType => ({
  type: "TOOGLE_MOBILE_MENU",
  anchor,
  open,
});
