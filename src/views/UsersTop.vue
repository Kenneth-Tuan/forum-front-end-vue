<template>
  <div class="container py-5">
    <NavTabs />
    <template>
      <h1 class="mt-5">美食達人</h1>
      <hr />
      <div class="row text-center">
        <div v-for="user in users" :key="user.id" class="col-3">
          <router-link :to="{ name: 'user', params: { id: user.id } }">
            <img :src="user.image | emptyImage" width="140px" height="140px" />
          </router-link>
          <h2>{{ user.name }}</h2>
          <span class="badge badge-secondary"
            >追蹤人數：{{ user.followerCount }}</span
          >
          <p class="mt-3">
            <button
              v-if="user.isFollowed"
              type="button"
              class="btn btn-danger"
              @click.stop.prevent="deleteFollowing(user.id)"
            >
              取消追蹤
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFollowing(user.id)"
            >
              追蹤
            </button>
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
export default {
  name: "UsersTop",
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
};
</script>