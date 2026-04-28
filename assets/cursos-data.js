// Simulated data for cursos.html – cursos y rutas de aprendizaje de Oaxaca
// ---------------------------------------------------------------
const USER = {
  name: "María López",
  role: "Especialista en Turismo",
  avatar: "https://i.pravatar.cc/150?img=47",
  progress: 68, // porcentaje total de avance
  activeCourses: [
    { id: 301, title: "Taller de Mole Negro", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", progress: 45 },
    { id: 303, title: "Ecoturismo Responsable", img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&q=80", progress: 70 }
  ],
  certifications: [
    { id: 401, title: "Certificado en Gastronomía", date: "2024-09-12" },
    { id: 402, title: "Certificado en Artesanía", date: "2024-10-05" }
  ]
};

const CATEGORIES = [
  { label: "Sostenibilidad", icon: "fa-leaf", count: 14 },
  { label: "Cocina", icon: "fa-utensils", count: 9 },
  { label: "Artesanía", icon: "fa-paintbrush", count: 7 },
  { label: "Tecnología", icon: "fa-microchip", count: 5 },
  { label: "Ecoturismo", icon: "fa-tree", count: 8 },
  { label: "Música y Danza", icon: "fa-music", count: 4 }
];

const COURSES = [
  {
    id: 301,
    title: "Taller de Mole Negro",
    desc: "Aprende a preparar el icónico mole negro con técnicas ancestrales.",
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    level: "Intermedio",
    duration: "4 semanas",
    rating: 4.9,
    students: 124,
    category: "Cocina",
    modality: "Presencial",
    price: 120,
    icon: "fa-utensils",
    iconColor: "bg-rose-500"
  },
  {
    id: 302,
    title: "Curso de Cerámica de Barro Negro",
    desc: "Domina la técnica de moldeado y pulido del barro negro.",
    badge: "Nuevo",
    img: "https://images.unsplash.com/photo-1582719478250-0c2f0c2d5e3b?w=600&q=80",
    level: "Avanzado",
    duration: "6 semanas",
    rating: 4.8,
    students: 87,
    category: "Artesanía",
    modality: "Online",
    price: 150,
    icon: "fa-paintbrush",
    iconColor: "bg-purple-500"
  },
  {
    id: 303,
    title: "Ecoturismo Responsable en la Sierra Norte",
    desc: "Explora senderos y aprende prácticas de turismo sostenible.",
    badge: "Recomendado",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&q=80",
    level: "Básico",
    duration: "2 semanas",
    rating: 4.7,
    students: 200,
    category: "Ecoturismo",
    modality: "Presencial",
    price: 200,
    icon: "fa-tree",
    iconColor: "bg-green-500"
  },
  {
    id: 304,
    title: "Introducción a la Realidad Aumentada para Turismo",
    desc: "Crea experiencias AR para promocionar destinos.",
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1526403222-5c6c5e5c8e6c?w=600&q=80",
    level: "Intermedio",
    duration: "3 semanas",
    rating: 4.6,
    students: 95,
    category: "Tecnología",
    modality: "Online",
    price: 250,
    icon: "fa-microchip",
    iconColor: "bg-blue-500"
  },
  {
    id: 305,
    title: "Taller de Danza Folklórica Oaxaqueña",
    desc: "Aprende los pasos y la historia de la danza tradicional.",
    badge: "Nuevo",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    level: "Básico",
    duration: "5 semanas",
    rating: 4.8,
    students: 110,
    category: "Música y Danza",
    modality: "Presencial",
    price: 130,
    icon: "fa-music",
    iconColor: "bg-yellow-500"
  }
];

const LEARNING_PATHS = [
  {
    id: 501,
    name: "Ruta de Sostenibilidad",
    desc: "Conoce prácticas ecológicas para el turismo.",
    progress: 55,
    totalCourses: 8,
    totalHours: 32
  },
  {
    id: 502,
    name: "Ruta de Gastronomía Oaxaqueña",
    desc: "Explora la riqueza culinaria de Oaxaca.",
    progress: 70,
    totalCourses: 6,
    totalHours: 24
  }
];

// Export – variables are global when script is loaded
