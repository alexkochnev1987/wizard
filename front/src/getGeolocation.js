const url = 'http://localhost:1337/api/geolocations/'


export const getGeolocation = async (id) => {
    try {
        const res = await fetch(url + id)
        if (!res.ok) throw Error('Response Error')
        const { data: { attributes } } = await res.json()
        return ({ latitude: attributes.latitude, longitude: attributes.longitude });

    } catch (error) {
        console.log('Error', error);
    }
}