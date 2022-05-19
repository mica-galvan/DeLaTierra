const productoss = [
    {
        id: '1',
        categoria: 'Macetas',
        nombre: "Maceta Monstera Grande",
        precio: '$1700',
        foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/979/572/products/maceta-premium-n-27-gris1-e2e9871341d3ad9f9216445201596183-640-0.png',
        stock: 4,
        descripcion: 'Diámetro de la boca 65 cm	Diámetro de la base 80 cm. Altura 75 cm	Volumen 60 litros. Material Polietileno Alta Resistencia. Textura lisa',


    },


    {
        id: '2',
        categoria: 'Macetas',
        nombre: "Maceta Cubo",
        precio: '$1400',
        foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/979/572/products/cubo-30-blanco1-fef0ca00150e3b9bc516322554124243-640-0.jpg',
        stock: 10,
        descripcion: 'Diseño anatómico y minimalista, reforzada.Tiene más de 15 años de vida útil.Construido en polietileno, material altamente resistente a la presión e impacto.No genera residuos peligrosos en su fabricación y es de bajo impacto ambiental.Apto para intemperie, resistente al agua, humedad y rayos UV.No se reseca.Simple de limpiar.Resistente a químicos',

    },

    {
        id: '3',
        categoria: 'Macetas',
        nombre: "Maceta Grande ",
        precio: '$1500',
        foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/979/572/products/blanco-181-8679d60e3954f779f916322699842301-640-0.jpg',
        stock: 3,
        descripcion: 'Diámetro de la boca 35 cm	Diámetro de la base 40 cm. Altura 55 cm	Volumen 60 litros. Material Polietileno Alta Resistencia	Textura Granallada',
    },

    {
        id: '4',
        categoria: 'Macetas',
        nombre: "Maceta Bottle",
        precio: '$1300',
        foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/979/572/products/gota-55-blanco1-d544dc50cce5bdbdeb16322567718985-640-0.jpg',
        stock: 2,
        descripcion: 'Alto 30 cm	Ancho 30 cm. Largo 30 cm. Volumen 27 litros.Material Polietileno Alta Resistencia	Textura Granallada',
    },

    {
        id: '5',
        categoria: 'Macetas',
        nombre: "Maceta Cactus",
        precio: '$950',
        foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/979/572/products/jardinera-40-blanco1-ef58c4d09ecdcc34b616322584041503-640-0.jpg',
        stock: 5,
        descripcion: 'Diseño anatómico y minimalista, reforzada.Tiene más de 15 años de vida útil.Construido en polietileno, material altamente resistente a la presión e impacto.No genera residuos peligrosos en su fabricación y es de bajo impacto ambiental.Apto para intemperie, resistente al agua, humedad y rayos UV.No se reseca.Simple de limpiar.Resistente a químicos',
    },

    {
        id: '6',
        categoria: 'Macetas',
        nombre: "Maceta Garden",
        precio: '$2000',
        foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/979/572/products/copa-40-negro1-1c768d1e1aeb4bc3d716322416797903-640-0.jpg',
        stock: 8,
        descripcion: 'Diámetro de la boca 34 cm. Altura 40 cm. Volumen 25 litros. Material Polietileno Alta Resistencia',
    },

    {
        id: '7',
        categoria: 'Herramientas',
        nombre: "Kit Herramientas x 4",
        precio: '$4000',
        foto: 'https://zonarex-12hapv4k4jp.netdna-ssl.com/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/t/1/t15040.jpg',
        stock: 6,
        descripcion: 'Incluye: 1 Transplantador. 1 Cuchara. 1 Azadón. 1 Cultivador',
    },

    {
        id: '8',
        categoria: 'Herramientas',
        nombre: "Kit Herramientas x 8",
        precio: '$6000',
        foto: 'https://zonarex-12hapv4k4jp.netdna-ssl.com/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/t/7/t78119801.jpg',
        stock: 3,
        descripcion: 'Compuesto de 8 piezas metálicas con mango de madera, el juego trae herramientas ideales para el trabajo al aire libre: palita ancha, rastrillo, tenedor, guantes, tijera de poda, tenedor pequeño, palita fina, cinturón para guardar',
    },

    {
        id: '9',
        categoria: 'Herramientas',
        nombre: "Tijera de Poda t19",
        precio: '$1300',
        foto: 'https://zonarex-12hapv4k4jp.netdna-ssl.com/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/t/1/t18371.jpg',
        stock: 8,
        descripcion: 'Tijera para poda a dos manos 19", forjada tipo alemán. Forjada en acero alto carbono. Filos rectificados para cortes precisos y suaves. Diseño robusto de hojas encajadas que impiden el cruce. Muesca para corte de ramas y mariposa de ajuste',
    },

    {
        id: '10',
        categoria: 'cesped-y-riego',
        nombre: "Kit de Riego Manguera 25 Mts + Accesorios",
        precio: '$13.000',
        foto: 'https://zonarex-12hapv4k4jp.netdna-ssl.com/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/r/m/rmdl3425s-1.jpg',
        stock: 2,
        descripcion: 'Refuerzo en diagonal de 18 fibras, resistente a la presión y estable en cuanto a la forma. Alto grado de flexibilidad y resistencia térmica. Incluye Accesorios: 2 conexion rapida, 1 adaptador de canilla, 1 pistola de riego. Medidas : 45 x 45 x 15.Peso : 6 Kg. Diámetro: ¾.Largo : 25 Metros',
    },
    {
        id: '11',
        categoria: 'cesped-y-riego',
        nombre: "Manguera de Riego Reforzada 1/2 x 15 Mts",
        precio: '$1300',
        foto: 'https://zonarex-12hapv4k4jp.netdna-ssl.com/media/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/s/f/sf70001-sf70002.jpg',
        stock: 3,
        descripcion: 'Manguera de Riego Reforzada. Medidas: 1/2 x 15 Mts',
    },
    {
        id: '12',
        categoria: 'cesped-y-riego',
        nombre: "Adaptador Grifo Manguera Pvc 3/4",
        precio: '$1300',
        foto: 'https://zonarex-12hapv4k4jp.netdna-ssl.com/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/r/a/radg34-2.jpg',
        stock: 8,
        descripcion: 'Adaptador plástico PVC para grifo de 3/4 Comfort Rehau',
    },

    {
        id: '14',
        categoria: 'cesped-y-riego',
        nombre: "Cortadora De Césped Eléctrica",
        precio: '$23000',
        foto: 'https://zonarex-12hapv4k4jp.netdna-ssl.com/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/l/c/lco1032b.jpg',
        stock: 8,
        descripcion: 'Cortadora De Césped Eléctrica 1000w 32 cm Lusqtoff Lco-1032. Número de Certificado: BVA/E/0202-20 Lüsqtoff.Ruedas de 6. Capacidad de la bolsa: 30 Lts. Peso: 7,2 kg. Con interruptor de seguridad Certificadora: BUREAU VERITAS',
    },
]



export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? productoss.find(producto => producto.id === id) : productoss
            //console.log(query)
            resolve(query);
        }, 500)
    })
}

/*
const productoo =
{
    id: '1',
    categoria: 'Macetas',
    nombre: "Maceta Monstera Grande",
    precio: '$1700',
    foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/979/572/products/maceta-premium-n-27-gris1-e2e9871341d3ad9f9216445201596183-640-0.png',
    stock: 4
}

export const getFetchOne = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productoo);
    }, 1000)
})
*/