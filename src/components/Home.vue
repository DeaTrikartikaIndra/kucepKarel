
<template>

  <v-app>
    <v-toolbar
    white
    color="white"
  >
    <v-toolbar-title><router-link to="/">
      <v-img
        src = 'https://firebasestorage.googleapis.com/v0/b/pwlfinal71190467.appspot.com/o/Deapedia-removebg-preview.png?alt=media&token=02912018-4b32-4af6-b76b-3a62a42ae9b4'
        height = 150
        width = 150>
        </v-img>
    </router-link></v-toolbar-title>
        
    <v-autocomplete

      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="What are you looking for?"
      solo-inverted
    ></v-autocomplete>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <router-link to="/login">Login</router-link>
  </v-toolbar>

    <v-carousel cycle>
      <v-carousel-item
        v-for="i in carousel"
        :key="i.id"
      >
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">
              <v-img :src = i.link></v-img>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    
  <v-card
  v-for="item in mk01" :key="item.id"

    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src= item.link
    ></v-img>

    <v-card-title>{{item.nama}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value=item.rating
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{item.rating}} {{(item.pembeli)}}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        Rp {{item.harga}}
      </div>

      <div>{{item.deskripsi}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-app>
</template>

<script>
import { db } from '../db'

export default {
  name: 'App',
  data ()  { 
    return {
      mk01:[],
      carousel:[],
      loading: false,
      selection: 1,
      mk02:[],
      loading: false,
      items: [],
      search: '',
      select: '',
  }
  },
  watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
  methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.mk02.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
      computed:{
        filteredMk:function(){
          return this.mk01.filter((x)) => {
            return boolean;
          }
        }
      }
    },
  created(){
  db.collection("mk01")
                    .get()
                    .then((querySnapshot) => {
                        const documents = querySnapshot.docs.map((doc) => doc.data());
                        this.mk01 = documents;
                    });

  db.collection("carousel")
                    .get()
                    .then((querySnapshot) => {
                        const documents = querySnapshot.docs.map((doc) => doc.data());
                        this.carousel = documents;
                    });
  
  db.collection("mk01")
                    .get()
                    .then((querySnapshot) => {
                        const documents = querySnapshot.docs.map((doc) => doc.data().nama);
                        this.mk02 = documents;
                    });
  },   
  }

</script>