<template>
  <div class="card">
    <div class="card-header"><strong>{{ favoritedRestaurants.length }}</strong> 收藏的餐廳</div>
    <div class="card-body">
      <a
       v-for="favoritedRestaurant in favoritedRestaurants"
       :key="favoritedRestaurant.id"
       :href="'/restaurants/' + favoritedRestaurant.id">
        <img
          :src="favoritedRestaurant.image | emptyImageFilter"
          width="60"
          height="60"
          class="avatar"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

export default {
    props: {
        favoritedRestaurants: {
            type: Array,
            required: true
        }
    },
    mixins: [emptyImageFilter]
}
</script>