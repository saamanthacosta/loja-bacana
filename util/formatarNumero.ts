export const formatarNumero = (valor: number) => {
    let numero = parseFloat((valor).toFixed(2));
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numero);
}