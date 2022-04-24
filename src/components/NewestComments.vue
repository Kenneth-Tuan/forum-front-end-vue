<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div
       v-for="comment in comments"
       :key="comment.id">
        <h4>
          <a href="#">
            {{ comment.Restaurant.name }}
          </a>
        </h4>
        <p>{{ comment.text }}</p>by
        <router-link
          :to="{ name: 'user', params: { id: comment.UserId }}"
        >
          {{ comment.User.name }}
        </router-link>
        {{ comment.createdAt | fromNow }}
        <hr>
      </div>

    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
    fromNow (datetime) {
      if (!datetime) {
        return '-'
      }
      return moment(datetime).fromNow()
    }
  },
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>