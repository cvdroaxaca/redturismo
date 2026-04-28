// Simulated data for eventos.html – turismo en Oaxaca
// ---------------------------------------------------
// Categories (used in the carousel)
const CATEGORIES = [
    { label: 'Cultura y Patrimonio', icon: 'fa-landmark', color: 'bg-orange-100 text-orange-600' },
    { label: 'Ecoturismo y Aventura', icon: 'fa-tree', color: 'bg-green-100 text-green-600' },
    { label: 'Gastronomía', icon: 'fa-utensils', color: 'bg-rose-100 text-rose-600' },
    { label: 'Artesanías', icon: 'fa-paintbrush', color: 'bg-purple-100 text-purple-600' },
    { label: 'Música y Danza', icon: 'fa-music', color: 'bg-blue-100 text-blue-600' },
    { label: 'Más categorías', icon: 'fa-ellipsis', color: 'bg-slate-100 text-slate-500' }
];

// Eventos destacados (grid)
const EVENTS = [
    {
        id: 101,
        title: 'Feria del Chocolate de San Pablo Villa de Mitla',
        desc: 'Degustación de chocolate artesanal, talleres de cacao y exposición de productores locales.',
        type: 'Feria',
        date: '2024-10-12',
        city: 'Mitla',
        category: 'Gastronomía',
        photo: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80',
        icon: 'fa-utensils',
        iconColor: 'bg-rose-500',
        members: 84,
        invited: []
    },
    {
        id: 102,
        title: 'Ruta de los Pueblos Mancomunados – Trekking 3 días',
        desc: 'Caminata guiada por los municipios de San Juan del Estado, San Miguel del Valle y Santa María del Tule.',
        type: 'Taller',
        date: '2024-11-05',
        city: 'San Juan del Estado',
        category: 'Ecoturismo y Aventura',
        photo: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&q=80',
        icon: 'fa-tree',
        iconColor: 'bg-green-500',
        members: 57,
        invited: []
    },
    {
        id: 103,
        title: 'Conferencia: Turismo Sostenible en Oaxaca',
        desc: 'Panel con expertos de la UNAM, SENER y comunidades locales sobre prácticas sostenibles.',
        type: 'Conferencia',
        date: '2024-12-02',
        city: 'Oaxaca de Juárez',
        category: 'Cultura y Patrimonio',
        photo: 'https://images.unsplash.com/photo-1526403222-5c6c5e5c8e6c?w=600&q=80',
        icon: 'fa-landmark',
        iconColor: 'bg-orange-500',
        members: 132,
        invited: []
    },
    {
        id: 104,
        title: 'Festival de la Guelaguetza 2024',
        desc: 'Celebración de danzas, música y gastronomía tradicional de los ocho pueblos originarios.',
        type: 'Feria',
        date: '2024-07-20',
        city: 'Oaxaca de Juárez',
        category: 'Música y Danza',
        photo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
        icon: 'fa-music',
        iconColor: 'bg-blue-500',
        members: 210,
        invited: []
    },
    {
        id: 105,
        title: 'Taller de Alfarería en San Bartolo Coyotepec',
        desc: 'Aprende técnicas ancestrales de barro negro con artesanos locales.',
        type: 'Taller',
        date: '2024-09-15',
        city: 'San Bartolo Coyotepec',
        category: 'Artesanías',
        photo: 'https://images.unsplash.com/photo-1582719478250-0c2f0c2d5e3b?w=600&q=80',
        icon: 'fa-paintbrush',
        iconColor: 'bg-purple-500',
        members: 38,
        invited: []
    },
    {
        id: 106,
        title: 'Cata de Mezcal en Santiago Matatlán',
        desc: 'Recorrido por destilerías, degustación y charla sobre procesos de producción.',
        type: 'Webinar',
        date: '2024-08-08',
        city: 'Santiago Matatlán',
        category: 'Gastronomía',
        photo: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?w=600&q=80',
        icon: 'fa-utensils',
        iconColor: 'bg-rose-500',
        members: 64,
        invited: []
    }
];

// Próximos eventos (sidebar)
const UPCOMING = [
    { title: 'Visita guiada a Monte Albán', date: '2024-10-01', icon: 'fa-landmark', iconColor: 'bg-orange-500' },
    { title: 'Caminata al Cerro del Fortín', date: '2024-10-03', icon: 'fa-tree', iconColor: 'bg-green-500' },
    { title: 'Noche de Jazz en el Centro', date: '2024-10-05', icon: 'fa-music', iconColor: 'bg-blue-500' }
];

// Eventos recomendados (sidebar)
const RECOMMENDED = [
    { title: 'Mercado de Artesanías de Teotitlán', city: 'Teotitlán del Valle', icon: 'fa-paintbrush', iconColor: 'bg-purple-500' },
    { title: 'Rally de Veleros en la Bahía de Puerto Escondido', city: 'Puerto Escondido', icon: 'fa-ship', iconColor: 'bg-cyan-500' },
    { title: 'Taller de Cocina Oaxaqueña', city: 'Oaxaca de Juárez', icon: 'fa-utensils', iconColor: 'bg-rose-500' }
];

// Contactos para invitar (reutilizamos los de grupos)
const INVITE_MEMBERS = [
    { name: 'Carlos Mendoza', role: 'Tour Operador', img: 'https://i.pravatar.cc/150?img=11' },
    { name: 'Sofía Ruiz', role: 'Guía Certificada', img: 'https://i.pravatar.cc/150?img=16' },
    { name: 'Miguel Torres', role: 'Restaurantero', img: 'https://i.pravatar.cc/150?img=67' },
    { name: 'Ana García', role: 'Artesana', img: 'https://i.pravatar.cc/150?img=44' },
    { name: 'Luis Hernández', role: 'Hotelero', img: 'https://i.pravatar.cc/150?img=69' }
];

// Export (global) – the script is loaded via <script src="assets/eventos-data.js"></script>
// No module syntax needed; variables are attached to window automatically.
