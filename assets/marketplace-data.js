// Simulated data for marketplace.html – productos turísticos de Oaxaca
// ---------------------------------------------------------------
// Categories (used in the carousel)
const MP_CATEGORIES = [
    { label: 'Artesanías', icon: 'fa-paintbrush', color: 'bg-purple-100 text-purple-600' },
    { label: 'Gastronomía', icon: 'fa-utensils', color: 'bg-rose-100 text-rose-600' },
    { label: 'Hospedaje', icon: 'fa-bed', color: 'bg-blue-100 text-blue-600' },
    { label: 'Tours', icon: 'fa-map-signs', color: 'bg-green-100 text-green-600' },
    { label: 'Experiencias', icon: 'fa-star', color: 'bg-yellow-100 text-yellow-600' },
    { label: 'Más', icon: 'fa-ellipsis', color: 'bg-slate-100 text-slate-500' }
];

// Productos destacados (grid)
const MP_PRODUCTS = [
    {
        id: 201,
        name: 'Manta de Barro Negro – San Bartolo Coyotepec',
        desc: 'Manta artesanal de barro negro, talla tradicional, 120x180 cm.',
        price: 85,
        rating: 4.8,
        category: 'Artesanías',
        photo: 'https://images.unsplash.com/photo-1582719478250-0c2f0c2d5e3b?w=600&q=80',
        icon: 'fa-paintbrush',
        iconColor: 'bg-purple-500',
        location: 'San Bartolo Coyotepec'
    },
    {
        id: 202,
        name: 'Mole Negro en Frasco – Oaxaca de Juárez',
        desc: 'Mole negro tradicional, 500g, receta familiar transmitida de generación en generación.',
        price: 25,
        rating: 4.6,
        category: 'Gastronomía',
        photo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
        icon: 'fa-utensils',
        iconColor: 'bg-rose-500',
        location: 'Oaxaca de Juárez'
    },
    {
        id: 203,
        name: 'Eco‑Lodge “Los Pinos” – San Juan del Estado',
        desc: 'Cabaña de madera con vista a la sierra, incluye desayuno orgánico.',
        price: 120,
        rating: 4.9,
        category: 'Hospedaje',
        photo: 'https://images.unsplash.com/photo-1505691723518-36a0b2c9e1c1?w=600&q=80',
        icon: 'fa-bed',
        iconColor: 'bg-blue-500',
        location: 'San Juan del Estado'
    },
    {
        id: 204,
        name: 'Tour de Mezcal – Santiago Matatlán',
        desc: 'Recorrido guiado por 3 destilerías, degustación y charla sobre proceso.',
        price: 70,
        rating: 4.7,
        category: 'Tours',
        photo: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?w=600&q=80',
        icon: 'fa-map-signs',
        iconColor: 'bg-green-500',
        location: 'Santiago Matatlán'
    },
    {
        id: 205,
        name: 'Clase de Cocina Oaxaqueña – Casa de la Abuela',
        desc: 'Aprende a preparar tlayudas, mole y mezcal con chefs locales.',
        price: 45,
        rating: 4.5,
        category: 'Experiencias',
        photo: 'https://images.unsplash.com/photo-1556912999-6e5e5d3e5a6b?w=600&q=80',
        icon: 'fa-star',
        iconColor: 'bg-yellow-500',
        location: 'Oaxaca de Juárez'
    },
    {
        id: 206,
        name: 'Alfombra de Tela – Teotitlán del Valle',
        desc: 'Alfombra tejida a mano con tintes naturales, 2x3 metros.',
        price: 150,
        rating: 4.8,
        category: 'Artesanías',
        photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
        icon: 'fa-paintbrush',
        iconColor: 'bg-purple-500',
        location: 'Teotitlán del Valle'
    },
    {
        id: 207,
        name: 'Quesillo Artesanal – Etla',
        desc: 'Quesillo fresco de leche de vaca, 500g, ideal para tacos.',
        price: 12,
        rating: 4.4,
        category: 'Gastronomía',
        photo: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80',
        icon: 'fa-utensils',
        iconColor: 'bg-rose-500',
        location: 'Etla'
    },
    {
        id: 208,
        name: 'Boutique “Casa del Sol” – Puerto Escondido',
        desc: 'Habitación con vista al mar, wifi, desayuno incluido.',
        price: 95,
        rating: 4.6,
        category: 'Hospedaje',
        photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
        icon: 'fa-bed',
        iconColor: 'bg-blue-500',
        location: 'Puerto Escondido'
    },
    {
        id: 209,
        name: 'Excursión a Hierve el Agua – San Lorenzo Albarradas',
        desc: 'Visita guiada a las cascadas petrificadas, incluye transporte y guía.',
        price: 55,
        rating: 4.7,
        category: 'Tours',
        photo: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&q=80',
        icon: 'fa-map-signs',
        iconColor: 'bg-green-500',
        location: 'San Lorenzo Albarradas'
    },
    {
        id: 210,
        name: 'Noche de Mezcal y Jazz – Centro de Oaxaca',
        desc: 'Evento íntimo con cata de mezcal y música en vivo.',
        price: 30,
        rating: 4.5,
        category: 'Experiencias',
        photo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
        icon: 'fa-star',
        iconColor: 'bg-yellow-500',
        location: 'Oaxaca de Juárez'
    },
    {
        id: 211,
        name: 'Café Orgánico – San Juan del Estado',
        desc: 'Paquete de 250g de café de altura, tostado artesanal.',
        price: 18,
        rating: 4.6,
        category: 'Gastronomía',
        photo: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
        icon: 'fa-utensils',
        iconColor: 'bg-rose-500',
        location: 'San Juan del Estado'
    },
    {
        id: 212,
        name: 'Taller de Cerámica – San Pablo Villa de Mitla',
        desc: 'Clase práctica de cerámica tradicional, incluye materiales.',
        price: 40,
        rating: 4.7,
        category: 'Experiencias',
        photo: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?w=600&q=80',
        icon: 'fa-star',
        iconColor: 'bg-yellow-500',
        location: 'San Pablo Villa de Mitla'
    }
];

// Productos destacados (sidebar)
const MP_FEATURED = [
    { name: 'Manta de Barro Negro', price: 85, icon: 'fa-paintbrush', iconColor: 'bg-purple-500' },
    { name: 'Eco‑Lodge Los Pinos', price: 120, icon: 'fa-bed', iconColor: 'bg-blue-500' },
    { name: 'Tour de Mezcal', price: 70, icon: 'fa-map-signs', iconColor: 'bg-green-500' }
];

// Productos recomendados (sidebar)
const MP_RECOMMENDED = [
    { name: 'Alfombra de Tela', price: 150, icon: 'fa-paintbrush', iconColor: 'bg-purple-500' },
    { name: 'Quesillo Artesanal', price: 12, icon: 'fa-utensils', iconColor: 'bg-rose-500' },
    { name: 'Noche de Mezcal y Jazz', price: 30, icon: 'fa-star', iconColor: 'bg-yellow-500' }
];

// Contactos para invitar/comprar (reutilizamos los de grupos)
const MP_CONTACTS = [
    { name: 'Carlos Mendoza', role: 'Vendedor', img: 'https://i.pravatar.cc/150?img=11' },
    { name: 'Sofía Ruiz', role: 'Chef', img: 'https://i.pravatar.cc/150?img=16' },
    { name: 'Miguel Torres', role: 'Propietario', img: 'https://i.pravatar.cc/150?img=67' },
    { name: 'Ana García', role: 'Artesana', img: 'https://i.pravatar.cc/150?img=44' },
    { name: 'Luis Hernández', role: 'Hotelero', img: 'https://i.pravatar.cc/150?img=69' }
];

// Export – variables are global when script is loaded
