export const formateValue = (value) => {
    const format = value.toLocaleString("pt-BR", {
        currency: "BRL",
        style: "currency",
        minimumFractionDigits: 2
    })

    return format;
}