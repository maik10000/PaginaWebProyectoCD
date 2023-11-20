export const formatResp = (resp) =>({
    cliente : resp[0]?.Cliente,
    precio: resp[0]?.Modelo
})