<template>
  <v-progress-circular
    v-if="active"
    :size="70"
    :width="7"
    color="primary"
    indeterminate
  ></v-progress-circular>
</template>

<script>
export default {
  name: 'ComponentLoading',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
