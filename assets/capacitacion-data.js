// Simulated data for capacitacion.html – cursos y talleres de Oaxaca
// ---------------------------------------------------------------
const CAP_CATEGORIES = [
    { label: 'Cocina Tradicional', icon: 'fa-utensils', color: 'bg-rose-100 text-rose-600' },
    { label: 'Artesanía', icon: 'fa-paintbrush', color: 'bg-purple-100 text-purple-600' },
    { label: 'Ecoturismo', icon: 'fa-tree', color: 'bg-green-100 text-green-600' },
    { label: 'Tecnología', icon: 'fa-microchip', color: 'bg-blue-100 text-blue-600' },
    { label: 'Música y Danza', icon: 'fa-music', color: 'bg-yellow-100 text-yellow-600' },
    { label: 'Más', icon: 'fa-ellipsis', color: 'bg-slate-100 text-slate-500' }
];

const CAP_COURSES = [
    {
        id:301,
        title:'Taller de Mole Negro Oaxaqueño',
        desc:'Aprende a preparar el icónico mole negro con técnicas ancestrales y los mejores ingredientes locales.',
        category:'Cocina Tradicional',
        duration:'4 semanas',
        price:120,
        rating:4.9,
        photo:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
        icon:'fa-utensils',
        iconColor:'bg-rose-500',
        instructor:'Chef María González'
    },
    {
        id:302,
        title:'Curso de Cerámica de Barro Negro',
        desc:'Domina la técnica de moldeado y pulido del barro negro, creando piezas únicas.',
        category:'Artesanía',
        duration:'6 semanas',
        price:150,
        rating:4.8,
        photo:'https://images.unsplash.com/photo-1582719478250-0c2f0c2d5e3b?w=600&q=80',
        icon:'fa-paintbrush',
        iconColor:'bg-purple-500',
        instructor:'Artesano José Martínez'
    },
    {
        id:303,
        title:'Ecoturismo Responsable en la Sierra Norte',
        desc:'Explora senderos, flora y fauna mientras aprendes prácticas de turismo sostenible.',
        category:'Ecoturismo',
        duration:'2 semanas',
        price:200,
        rating:4.7,
        photo:'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&q=80',
        icon:'fa-tree',
        iconColor:'bg-green-500',
        instructor:'Guía Ana López'
    },
    {
        id:304,
        title:'Introducción a la Realidad Aumentada para Turismo',
        desc:'Aprende a crear experiencias AR para promocionar destinos turísticos.',
        category:'Tecnología',
        duration:'3 semanas',
        price:250,
        rating:4.6,
        photo:'https://images.unsplash.com/photo-1526403222-5c6c5e5c8e6c?w=600&q=80',
        icon:'fa-microchip',
        iconColor:'bg-blue-500',
        instructor:'Ing. Carlos Pérez'
    },
    {
        id:305,
        title:'Taller de Danza Folklórica Oaxaqueña',
        desc:'Aprende los pasos y la historia de la danza tradicional de Oaxaca.',
        category:'Música y Danza',
        duration:'5 semanas',
        price:130,
        rating:4.8,
        photo:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
        icon:'fa-music',
        iconColor:'bg-yellow-500',
        instructor:'Bailarina Luisa Hernández'
    }
];

// Contactos para soporte / inscripción
const CAP_CONTACTS = [
    { name:'Carlos Mendoza', role:'Coordinador', img:'https://i.pravatar.cc/150?img=11' },
    { name:'Sofía Ruiz', role:'Asistente', img:'https://i.pravatar.cc/150?img=16' }
];
