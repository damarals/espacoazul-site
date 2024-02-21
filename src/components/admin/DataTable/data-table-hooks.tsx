import { useEffect } from 'react'

type TablePageSizeResponsiveProps = {
  setPageSize: (pageSize: number) => void
}

export function useTablePageSizeResponsive({
  setPageSize,
}: TablePageSizeResponsiveProps) {
  useEffect(() => {
    function resizeTable() {
      setPageSize(
        Math.floor(
          (parseFloat(
            window.getComputedStyle(document.body as HTMLElement).height,
          ) -
            340) / // negative tbody height (all the other elements height)
            57, // row height
        ),
      )
    }
    resizeTable()
    window.onresize = resizeTable

    return () => {
      window.onresize = null
    }
  }, [setPageSize])
}
