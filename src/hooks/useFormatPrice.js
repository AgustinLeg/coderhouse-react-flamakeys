const useFormatPrice = (precio) => {
    const options = { style: 'currency', currency: 'ARS' };
    const priceFormat = new Intl.NumberFormat('es-AR', options);
    const precioNuevo = priceFormat.format(precio)
    const indexDecimal = precioNuevo.indexOf(',')
    const final =precioNuevo.slice(0,indexDecimal)
    return final;
}

export default useFormatPrice
