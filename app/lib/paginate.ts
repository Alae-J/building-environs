export interface PaginateResult<T> {
    items: T[]
    totalPages: number
  }
  
  export function paginate<T>(
    allItems: T[],
    pageSize: number,
    pageIndex: number
  ): PaginateResult<T> {
    const totalPages = Math.ceil(allItems.length / pageSize)
    const start = (pageIndex - 1) * pageSize
    const end = start + pageSize
    return {
      items: allItems.slice(start, end),
      totalPages,
    }
  }
  