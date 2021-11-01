export const useFormattedPercentage = (percentage: number) => {
  var formatter = new Intl.NumberFormat("ru", {
    style: "percent",
    maximumFractionDigits: 2,
  })
  return formatter.format(percentage)
}
