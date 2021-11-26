<template>
  <div class="home container">
    <h1>Welcome to my Blog.</h1>
    <p>Select the desired article below:</p>
    <div class="home-posts">
      <PostCard v-for="post in postList"
                :key="post.id"
                :title="post.title"
                :num-comments="post.numComments"
                @click="openPost(post.id)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PostCard from "@/components/PostCard.vue";
import BlogService from "@/services/blog.service";
import { Post } from "@/entities/Post";

@Component({
  components: {
    PostCard,
  },
})
export default class Home extends Vue {
  postList: Post[] = [];

  openPost(id: number): void {
    this.$router.push({ name: "BlogPost", params: { id: `${id}` } });
  }

  created(): void {
    BlogService.getAllBlogPosts().then((result) => {
      this.postList = result;
    });
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables.scss";

.home {
  .home-posts{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    .post-card {
      width: calc(50% - 4.2rem - 1rem);
      margin: 1rem 0;

      @media screen and (max-width: $phone-width-cutoff) {
        width: 100%;
      }
    }
  }
}
</style>
