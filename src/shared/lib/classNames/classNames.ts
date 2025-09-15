
type Mods = Record<string, boolean | string | number | undefined | null>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    cls,
    ...additional.filter((v): v is string => Boolean(v)), // type guard
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ');
}


// classNames('remove-btn', { hevered: true, selectable: true, red: false}, ['pdg'])
// 'remove-btn hovered selectable pdg'
