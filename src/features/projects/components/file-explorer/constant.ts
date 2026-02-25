export const BASE_PADDING = 12;

export const LEVEL_PADDING = 12;

export const getItemPadding = (level: number, isFile: boolean) => {
  const fileOffset = isFile ? 0 : 1;
  return BASE_PADDING + level * LEVEL_PADDING + fileOffset;
};
