<template>
  <div class="post-card" @click="$emit('click')">
    <h3 class="post-title">
      {{ title }}
    </h3>
    <div class="post-comments-number">
      <font-awesome-icon icon="fa-regular fa-comment" />
      {{ numComments }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PostCard extends Vue {
  @Prop() private title!: string;

  @Prop() private numComments!: number;
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/mixins.scss';

.post-card {
  @include card-layout;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    margin: 0 2rem 0 0;
  }
}
</style>
