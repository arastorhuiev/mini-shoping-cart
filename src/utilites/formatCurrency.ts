const CURRENCT_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD', style: 'currency'
})

export function formatCurrency(number: number) {
  return CURRENCT_FORMATTER.format(number)
}