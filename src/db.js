import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

export const db = firebase
.initializeApp({ projectId: 'pwlfinal71190467' })
.firestore()

// db.collection('makeup').add({id:'fd01',nama: 'Dior Backstage Face & Body Foundation', Harga: '3000000', Deskripsi:"The Dior Backstage Face & Body Foundation is the Dior makeup artists' secret weapon to create an instantly flawless complexion with ultra-buildable coverage, from a natural nude glow to high-coverage perfection."});

