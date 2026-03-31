import { type Category } from '../types/catalog'

export const categories: Category[] = [
  {
    title: 'Mais assistidos',
    items: [
      {
        img: 'https://uploads.tracklist.com.br/file/uploads-tracklist-com-br/2026/03/o-diabo-veste-prada-2.jpg',
        youtube: 'https://www.youtube.com/watch?v=bLvqoHBptjg',
        top10: true,
        badge: { text: 'Clássico', color: 'white' },
        progress: 50,
      },
      {
        img: 'https://aventurasnahistoria.com.br/wp-content/uploads/entretenimento/gladiador_2_VvnGVes.jpg',
        youtube: 'https://www.youtube.com/watch?v=cXg62-t8BWs',
      },
      {
        img: 'https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg',
        youtube: 'https://www.youtube.com/watch?v=zckJCxYxn1g',
      },
      {
        img: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/14413-destaque.jpg',
        youtube: 'https://www.youtube.com/watch?v=a06zxOyQrAs',
      },
    ],
  },
  {
    title: 'Séries',
    items: [
      {
        img: 'https://poltronanerd.com.br/wp-content/uploads/2020/06/b28117ea-41bc-47fe-93ef-f82a1f31717b.jpg',
        youtube: 'https://youtu.be/YQeUmSD1c3g?si=BE3GfVAslE8-9Wbo',
        top10: true,
        badge: { text: 'Nova temporada', color: 'red' },
      },
      {
        img: 'https://static.wikia.nocookie.net/assista-series/images/5/56/Breaking-Bad.jpg/revision/latest?cb=20150528205254&path-prefix=pt-br',
        youtube: 'https://youtu.be/HhesaQXLuRY?si=jYC-3icoELhi37Es',
        top10: true,
      },
      {
        img: 'https://www.epipoca.com.br/wp-content/uploads/2025/09/elenco-de-stranger-things-quem-sao-os-atores.jpg',
        youtube: 'https://youtu.be/b9EkMc79ZSU?si=2xghYPq7f1JEWCQH',
        badge: { text: 'Novo episódio', color: 'red' },
      },
      {
        img: 'https://dark.netflix.io/share/global.png',
        youtube: 'https://youtu.be/JCCssUOtn2E?si=KZ-eutfuiCfZwSv4',
        badge: { text: 'Novidade', color: 'red' },
      },
    ],
  },
  {
    title: 'Para maratonar',
    items: [
      {
        img: 'https://m.media-amazon.com/images/S/pv-target-images/0a8baa1df1a252bc7f02fa85b4c9051f302fa822c0e68fe9bd70e18ca4a593d4.png',
        youtube: 'https://youtu.be/QkT-HIMSrRk?si=68fDdhXnVw0V72eU',
        top10: true,
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/pt/b/b6/Riverdale_s%C3%A9rie_logo.png',
        youtube: 'https://youtu.be/HxtLlByaYTc?si=ApMqyFTNXHOHqjT0',
        top10: true,
        badge: { text: 'Novidade', color: 'red' },
      },
      {
        img: 'https://m.media-amazon.com/images/S/pv-target-images/5c3e0d6b9ad0460aa7e63bb1e1d56c4b75722a98f467f5aa8d22650c27a71e1b.jpg',
        youtube: 'https://youtu.be/oVzVdvGIC7U?si=8vCuPGyeFasTELga',
        top10: true,
        badge: { text: 'Novo episódio', color: 'red' },
      },
      {
        img: 'https://m.media-amazon.com/images/S/pv-target-images/f776cee5ad6754be44f660d99be95740700fd98d0c1582a018df0c8c22bae049.jpg',
        youtube: 'https://youtu.be/Mx1NzA9z708?si=-HEi7P3AKMx5tq2H',
        top10: true,
        badge: { text: 'Novo episódio', color: 'red' },
      },
    ],
  },
]