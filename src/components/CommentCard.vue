<template>
  <div class="comment-card" @click="$emit('click')">
    <div class="comment-name">
      <font-awesome-icon icon="fa-regular fa-circle-user" />
      <h3 class="comment-name">
        {{ commenter }}
      </h3>
      <em class="creation-date">on {{ creationDate.toDateString() }}</em>
    </div>
    <div class="comment-message">
      {{ comment.message }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Comment } from "@/entities/Comment";

@Component
export default class CommentCard extends Vue {
  @Prop() private comment!: Comment;

  get commenter(): string {
    return this.comment?.name || "Unknown";
  }

  get creationDate(): Date {
    return new Date(this.comment?.created || "");
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/mixins.scss';

.comment-card {
  @include card-layout;

  .comment-name {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .fa-circle-user {
      font-size: 2.5rem;
    }
    h3 {
      margin: 0 0.5rem 0 1rem;
    }
  }
}
</style>
