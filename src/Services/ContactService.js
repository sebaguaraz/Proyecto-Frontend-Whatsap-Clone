const contacts = [
    {
        id: 1,
        name: 'Will Smith',
        descripcion: "Actor y productor",
        avatar: '/images/will-smith.jpg',
        last_connection: "hace 10 minutos",
        connection_status: "online",
        message: [
            {
                id: 1,
                emisor: 'Yo',
                receptor: 'El',
                hora: '16:30',
                texto: 'Hey Will! Acabo de volver a ver "En busca de la felicidad", ¡increíble actuación!',
                status: 'visto'
            },
            {
                id: 2,
                emisor: 'El',
                receptor: 'Yo',
                hora: '16:33',
                texto: '¡Gracias! Esa película siempre va a tener un lugar especial en mi corazón.',
                status: 'visto'
            },
            {
                id: 3,
                emisor: 'Yo',
                receptor: 'El',
                hora: '16:35',
                texto: '¿Qué fue lo más difícil de interpretar ese papel?',
                status: 'visto'
            },
            {
                id: 4,
                emisor: 'El',
                receptor: 'Yo',
                hora: '16:38',
                texto: 'Probablemente las escenas con mi hijo. Fue emocionalmente intenso. Pero al mismo tiempo fue hermoso compartir eso con él.',
                status: 'visto'
            },
            {
                id: 5,
                emisor: 'Yo',
                receptor: 'El',
                hora: '16:40',
                texto: '¡Eso es muy profundo! ¿Tenés algún proyecto nuevo pronto?',
                status: 'visto'
            },
            {
                id: 6,
                emisor: 'El',
                receptor: 'Yo',
                hora: '16:43',
                texto: 'Sí, estoy trabajando en una nueva serie de ciencia ficción. Todavía es secreto, pero pronto habrá noticias 👀',
                status: 'visto'
            },
            {
                id: 7,
                emisor: 'Yo',
                receptor: 'El',
                hora: '16:45',
                texto: '¡Qué emoción! Estaré atento. ¡Sos un grande Will!',
                status: 'visto'
            },
            {
                id: 8,
                emisor: 'El',
                receptor: 'Yo',
                hora: '16:46',
                texto: 'Gracias hermano, ¡cuídate mucho!',
                status: 'visto'
            }
        ]
    },

    {
        id: 2,
        name: 'Tom Cruise',
        descripcion: "Actor de acción y productor",
        avatar: '/images/tom-cruise.jpg',
        last_connection: "En línea",
        connection_status: "online",
        message: [
            {
                id: 1,
                emisor: 'Yo',
                receptor: 'El',
                hora: '17:20',
                texto: '¡Tom! Acabo de ver Misión Imposible 7, ¡estuvo brutal!',
                status: 'visto'
            },
            {
                id: 2,
                emisor: 'El',
                receptor: 'Yo',
                hora: '17:22',
                texto: '¡Gracias! Me alegra que te haya gustado. Fue una locura filmarla 😅',
                status: 'visto'
            },
            {
                id: 3,
                emisor: 'Yo',
                receptor: 'El',
                hora: '17:23',
                texto: '¿Es cierto que hiciste todas esas acrobacias vos mismo?',
                status: 'visto'
            },
            {
                id: 4,
                emisor: 'El',
                receptor: 'Yo',
                hora: '17:25',
                texto: 'Sí, entrené durante meses para cada escena. Me gusta darlo todo por cada papel.',
                status: 'visto'
            },
            {
                id: 5,
                emisor: 'Yo',
                receptor: 'El',
                hora: '17:26',
                texto: '¡Se nota! La escena del salto en moto desde el acantilado fue una locura 🤯',
                status: 'visto'
            },
            {
                id: 6,
                emisor: 'El',
                receptor: 'Yo',
                hora: '17:27',
                texto: 'Esa fue la toma más desafiante de mi carrera. ¡La practicamos más de 500 veces!',
                status: 'visto'
            },
            {
                id: 7,
                emisor: 'Yo',
                receptor: 'El',
                hora: '17:28',
                texto: 'Tenés mi respeto, Tom. ¿Qué viene ahora para vos?',
                status: 'visto'
            },
            {
                id: 8,
                emisor: 'El',
                receptor: 'Yo',
                hora: '17:29',
                texto: 'Estoy por empezar una película espacial… sí, de verdad, ¡vamos a filmar partes en el espacio!',
                status: 'visto'
            },
            {
                id: 9,
                emisor: 'Yo',
                receptor: 'El',
                hora: '17:30',
                texto: '¿En serio? ¡Sos un extraterrestre! 😄',
                status: 'visto'
            },
            {
                id: 10,
                emisor: 'El',
                receptor: 'Yo',
                hora: '17:31',
                texto: 'Jajaja gracias, ¡mantengamos la adrenalina viva!',
                status: 'visto'
            }
        ]
    },

    {
        id: 3,
        name: 'Juan Román Riquelme',
        descripcion: "Vicepresidente de Boca Juniors",
        avatar: '/images/riquelme.jpg',
        last_connection: "hace 30 minutos",
        connection_status: "online",
        message: [
            {
                id: 1,
                emisor: 'Yo',
                receptor: 'El',
                hora: '14:05',
                texto: 'Hola Román, ¿cómo ves al equipo para el próximo partido?',
                status: 'visto'
            },
            {
                id: 2,
                emisor: 'El',
                receptor: 'Yo',
                hora: '14:07',
                texto: 'Hola, estamos tranquilos. El grupo está trabajando bien.',
                status: 'visto'
            },
            {
                id: 3,
                emisor: 'Yo',
                receptor: 'El',
                hora: '14:10',
                texto: '¿Creés que Cavani llega en condiciones?',
                status: 'visto'
            },
            {
                id: 4,
                emisor: 'El',
                receptor: 'Yo',
                hora: '14:13',
                texto: 'Sí, está entrenando con normalidad. Seguro va a estar.',
                status: 'visto'
            },
            {
                id: 5,
                emisor: 'Yo',
                receptor: 'El',
                hora: '14:15',
                texto: '¡Genial! Vamos con todo el domingo 💙💛💙',
                status: 'visto'
            }
        ]
    },

    {
        id: 4,
        name: 'Jennifer Aniston',
        descripcion: "Actriz y productora",
        avatar: '/images/jennifer-aniston.jpg',
        last_connection: "Hoy",
        connection_status: "online",
        message: [
            {
                id: 1,
                emisor: 'Yo',
                receptor: 'Ella',
                hora: '10:00',
                texto: 'Hi Jennifer! Loved your last interview on Netflix!',
                status: 'visto'
            },
            {
                id: 2,
                emisor: 'Ella',
                receptor: 'Yo',
                hora: '10:02',
                texto: 'Thank you so much! I’m really excited about the new project.',
                status: 'visto'
            },
            {
                id: 3,
                emisor: 'Yo',
                receptor: 'Ella',
                hora: '10:05',
                texto: 'You’ve always been such an inspiration. Any chance of a new Friends reunion?',
                status: 'visto'
            },
            {
                id: 4,
                emisor: 'Ella',
                receptor: 'Yo',
                hora: '10:07',
                texto: 'Haha, I wish! We all talk now and then, but no plans for that, at least for now!',
                status: 'visto'
            },
            {
                id: 5,
                emisor: 'Yo',
                receptor: 'Ella',
                hora: '10:10',
                texto: 'Alright! Thanks for replying, really appreciate it 💛',
                status: 'visto'
            }
        ]
    }
]

export const getContacts = () => {
    return contacts
}

export const getContactById = (contactId) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contactId)) {
            return contact
        }
    }
    return null
}



export const addMessageToContact = (contactId, new_message) => {
    for (const contact of contacts) {
        // Aseguramos que la comparación sea correcta
        if (Number(contact.id) === Number(contactId)) {
            contact.message.push(new_message)
            return; // Detenemos la búsqueda una vez que encontramos el contacto
        }
    }
}

// Nuevo método para borrar un mensaje del servicio
export const deleteMessageFromContact = (contactId, messageId) => {
    const contact = contacts.find(c => Number(c.id) === Number(contactId));
    if (contact) {
        contact.message = contact.message.filter(msg => Number(msg.id) !== Number(messageId));
    }
};
// Los servicios van a tener la logica de negocios. Que cosas va a tener posible nuestra aplicacion. PJ: añadir nuevo contacto a la lista, tener contacto por id


export const deleteAllMessagesFromContact = (contactId) => {
    const contact = contacts.find(c => Number(c.id) === Number(contactId));
    if (contact) {
        contact.message = [];
    }
}