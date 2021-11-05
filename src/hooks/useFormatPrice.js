const useFormatPrice = (precio) => {
    const options = { style: 'currency', currency: 'ARS' };
    const priceFormat = new Intl.NumberFormat('es-AR', options);
    const precioNuevo = priceFormat.format(precio)
    const indexDecimal = precioNuevo.indexOf(',')
    return precioNuevo.slice(0,indexDecimal);
}

export default useFormatPrice
