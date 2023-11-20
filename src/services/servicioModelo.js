
const url = `http://127.0.0.1:5000/buscar/`

const buscarcotizacion = async (datos) =>{

    try{
       const resp =  await fetch(url+`${datos.Habitaciones}/${datos.parqueaderos}/${datos.banios}/${datos.Sector}/${datos.metros}/${datos.TipoAcabados}`,{ method:'POST', headers:{'Content-Type': 'application/json'}} )
       const data = await resp.json()
       console.log(data)
       return data
    }catch(error){
        return error
    }
}

export {buscarcotizacion}