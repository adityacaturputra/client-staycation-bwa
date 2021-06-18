function numberFormat(number) {
  const numFormatClass = new Intl.NumberFormat("id-ID");
  return numFormatClass.format(number);
}

export default numberFormat;
