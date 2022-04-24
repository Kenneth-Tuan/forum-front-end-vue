<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
       v-for="restaurant in restaurants"
       :key="restaurant.id"
       :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />

  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantsPagination from './../components/RestaurantsPagination.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Mr. General O'Hara",
            "tel": "1-149-371-5783 x84594",
            "address": "913 Irma Pike",
            "opening_hours": "08:00",
            "description": "Enim ab eveniet rerum natus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.15657670751574",
            "viewCounts": 0,
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-20T07:00:30.000Z",
                "updatedAt": "2022-04-20T07:00:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Dr. Pansy Mueller",
            "tel": "(207) 293-8989 x1038",
            "address": "22530 Ron Common",
            "opening_hours": "08:00",
            "description": "Quibusdam delectus culpa reprehenderit velit totam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.3064503794693",
            "viewCounts": 0,
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-20T07:00:30.000Z",
                "updatedAt": "2022-04-20T07:00:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 17,
            "name": "Brayan Smith",
            "tel": "1-165-154-6609",
            "address": "9399 Wilbert Run",
            "opening_hours": "08:00",
            "description": "Voluptatem laboriosam amet temporibus necessitatib",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.57793370943308",
            "viewCounts": 0,
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-20T07:00:30.000Z",
                "updatedAt": "2022-04-20T07:00:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 18,
            "name": "Jonatan Boyer",
            "tel": "(438) 785-9387 x26193",
            "address": "5955 Dayna Burg",
            "opening_hours": "08:00",
            "description": "Tenetur quae et delectus voluptate qui. Ea corpori",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.75458499454328",
            "viewCounts": 0,
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-20T07:00:30.000Z",
                "updatedAt": "2022-04-20T07:00:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 20,
            "name": "Lonzo Sauer III",
            "tel": "1-464-480-5929 x314",
            "address": "4389 Zboncak Fall",
            "opening_hours": "08:00",
            "description": "Dolorem consequatur nulla tempore. Non amet est vo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.866624627380713",
            "viewCounts": 0,
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-20T07:00:30.000Z",
                "updatedAt": "2022-04-20T07:00:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 24,
            "name": "Kayla Crist",
            "tel": "(894) 244-7266 x2946",
            "address": "184 Padberg Island",
            "opening_hours": "08:00",
            "description": "Nobis porro dolore est dolor. Autem autem voluptat",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.521187575673444",
            "viewCounts": 0,
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-20T07:00:30.000Z",
                "updatedAt": "2022-04-20T07:00:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 26,
            "name": "Alvera Durgan",
            "tel": "301.934.6633 x81479",
            "address": "7687 Heathcote Forge",
            "opening_hours": "08:00",
            "description": "nemo ut nobis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=55.44288047204233",
            "viewCounts": 0,
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-20T07:00:30.000Z",
                "updatedAt": "2022-04-20T07:00:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 31,
            "name": "Rahsaan O'Kon",
            "tel": "490.327.5556",
            "address": "0285 Marlene Throughway",
            "opening_hours": "08:00",
            "description": "Recusandae quia fugit esse distinctio est culpa.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.705784246429143",
            "viewCounts": 0,
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-20T07:00:30.000Z",
                "updatedAt": "2022-04-20T07:00:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 32,
            "name": "Eleanora Labadie",
            "tel": "1-431-202-7503",
            "address": "47552 Von Circle",
            "opening_hours": "08:00",
            "description": "Soluta quia tempora totam labore exercitationem di",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.61199596423303",
            "viewCounts": 0,
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-20T07:00:30.000Z",
                "updatedAt": "2022-04-20T07:00:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 33,
            "name": "Jerrell Johnston",
            "tel": "1-961-360-6433 x44312",
            "address": "64678 Taya Crescent",
            "opening_hours": "08:00",
            "description": "Rerum incidunt eius voluptatibus voluptatem offici",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.16685541993336",
            "viewCounts": 0,
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-20T07:00:30.000Z",
                "updatedAt": "2022-04-20T07:00:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-04-20T07:00:30.000Z",
            "updatedAt": "2022-04-20T07:00:30.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
    components: {
        NavTabs,
        RestaurantCard,
        RestaurantsNavPills,
        RestaurantsPagination
    },
    data () {
      return {
        restaurants: [],
        categories: [],
        categoryId: -1,
        totalPage: [],
        previousPage: -1,
        nextPage: -1
      }
    },
    created () {
      this.fetchRestaurants()
    },
    methods: {
      fetchRestaurants () {
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next
        } = dummyData
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
      }
    }
}
</script>