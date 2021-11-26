<template>
  <div class="blog-post container">
    <h1>{{ postTitle }}</h1>
    <h5>
      Post created on {{ creationDate.toDateString() }}
    </h5>
    <div class="post-content">{{ postContent }}</div>
    <div class="comment-section">
      <h3>Comments:</h3>
      <div v-if="!comments.length" class="no-comments">
        <p>No Comments for this post!</p>
      </div>
      <button>
        <font-awesome-icon icon="fa-regular fa-plus" />
        <span>Add Comment</span>
      </button>
      <CommentCard v-for="comment in comments"
                   :key="comment.id"
                   :comment="comment" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CommentCard from "@/components/CommentCard.vue";
import BlogService from "@/services/blog.service";
import { Post } from "@/entities/Post";
import { Comment } from "@/entities/Comment";

@Component({
  components: {
    CommentCard,
  },
})
export default class BlogPost extends Vue {
  post: Post | null = null;

  comments: Comment[] = [];

  get postTitle(): string {
    return this.post?.title || "";
  }

  get postContent(): string {
    return this.post?.content || "";
  }

  get creationDate(): Date {
    return new Date(this.post?.created || "");
  }

  created(): void {
    const id: number = +this.$route.params.id;
    Promise.all([
      BlogService.getBlogPost(id),
      BlogService.getCommentsForPost(id),
    ]).then((result) => {
      console.log(result);
      [this.post, this.comments] = result;
    });
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/mixins.scss';

.blog-post {
  margin-bottom: 3rem;
  .post-content {
    white-space: pre-wrap
  }

  .no-comments {
    @include card-layout;
  }
}

</style>
