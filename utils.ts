export function echo(message: string): string {
  console.log((window as any).a.b)
  return message
}

console.log('run utils')
