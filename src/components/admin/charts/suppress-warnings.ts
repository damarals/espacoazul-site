export default function useSuppressDefaultPropsWarning() {
  const error = console.error
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return
    error(...args)
  }
}
