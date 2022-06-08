<template>
  <v-card
    class=""
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ details.name }}
        </v-list-item-title>
        <v-list-item-subtitle v-for="(type, index) in details.types" :key="index">
          {{ type.type.name }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
        <v-img v-if="details.sprites" :src="details.sprites.front_default"></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'infoPokemon',
  props: {
    details: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
