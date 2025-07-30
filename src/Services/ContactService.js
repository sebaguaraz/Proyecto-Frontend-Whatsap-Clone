// tiene la lista de contactos



// Service

// cada contacto va a tener sus propios mensajes, es un array de mensajes.
// Luego cuando entremos a un contacto, va a traer todos los mensajes de ese contacto
const contacts = [
        {
            id:1,
            name: 'Ana',
            descripcion: "Estudiante de programacion",      
            avatar: "https://cms-images.acc.indazn.com/di/library/DAZN_News/be/79/joao-pedro-chelsea-mundial-de-clubes_93p8zsu0dta1ghvu6uwyf7q4.jpg?t=-864837905&quality=80&w=750&h=422",
            last_connection: "Ayer",
            connection_status: "offline",
            message: [{
                    id: 1,
                    emisor: 'Yo',
                    receptor: 'Otro',
                    hora: new Date().toLocaleTimeString(),
                    texto: '¡Buen día! ¿Recibiste el reporte que envié ayer?',
                    status: 'visto'
                },
                {
                    id: 2,
                    emisor: 'Otro',
                    receptor: 'Yo',
                    hora: new Date().toLocaleTimeString(),
                    texto: '¡Hola Laura! Sí, lo recibí. Lo estoy revisando ahora mismo. ¡Gracias!',
                    status: 'visto'
                }]
        },
        
        {
            id:2,
            name: 'Juan',
            descripcion: "Hace frio",      
            avatar: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFk4ooQMR9q7YMthnt8yl_erb48hWMnrVPxXlbVgPPwoGtont0EwBi15WdrDoDkwbHhlshJrJx8n-wFpbaeV_GSVXhUvGIui4qllkGuCQ",
            last_connection: "hace 2 horas",
            connection_status: "online",
            message: [{
                    id: 1,
                    emisor: 'Laura',
                    receptor: 'Carlos',
                    hora: new Date().toLocaleTimeString(),
                    texto: 'Hola ya estas en casa?',
                    status: 'visto'
                },
                {
                    id: 2,
                    emisor: 'Carlos',
                    receptor: 'Laura',
                    hora: new Date().toLocaleTimeString(),
                    texto: '¡Hola Seba! Sí ¡Gracias!',
                    status: 'visto'
                }]
        }
    ]

export const getContacts = () => {
        return contacts
    }

export const getContactById = (id) => {
        for(const contact of contacts){
            if(Number(contact.id) === Number(id)){
                return contact
            }
        }
        return null
    }

 
// Los servicios van a tener la logica de negocios. Que cosas va a tener posible nuestra aplicacion. PJ: añadir nuevo contacto a la lista, tener contacto por id