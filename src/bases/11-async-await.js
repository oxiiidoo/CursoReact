


// const getImagenPromesa = () =>
// new Promise( resolve => resolve('https://asdadasdas.com'))
// getImagenPromesa().then( console.log );


const getImagen = async() => {

    try {
        const apiKey = 'Kj4msqlWi56bJnFgokKXo0g3yRvXdYL7';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const {data} = await resp.json();

    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
    }catch (error){
        //manejor del error
        console.error (error ) 
    }

    
    
    
}

getImagen();












    


