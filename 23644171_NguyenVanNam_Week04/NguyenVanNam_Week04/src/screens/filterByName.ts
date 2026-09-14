export type HasName = {
    name: string;
  };
  
  export function filterByName<
    T extends HasName
  >(
    items: T[],
    keyword: string
  ): T[] {
    return items.filter((item) =>
      item.name
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );
  }