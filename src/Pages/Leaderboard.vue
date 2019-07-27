<template>
  <b-container fluid>
    <div class="flexbox">
        <div class ="centerBanner">Leaderboard</div>
    </div>
    <b-tabs content-class="mt-3">
    <b-tab title="2019" active>
      <!-- Searching -->
      <b-row>
        <b-col md="6" class="my-1" style="padding-bottom: 2vh">
          <b-form-group label-cols-sm="1" label="Search" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter"></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Main table  -->
      <b-table
        show-empty
        stacked="md"
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        @filtered="onFiltered"
        hover
      >
      </b-table>

      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            class="my-0"
          ></b-pagination>
        </b-col>
      </b-row>
      </b-tab>
      <b-tab title="2020" disabled></b-tab>
      <b-tab title="2021" disabled></b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
export default {
    name: 'Leaderboard',
    data() {
        return {
        items: [
            { rank: 1, name: 'Toowoomba Grammar School', avg_hours: '2120'},
            { rank: 2, name: 'Cheltenham Girls High School', avg_hours: '2061' },
            { rank: 3, name: 'Brisbane Grammar School', avg_hours: '1988' },
            { rank: 4, name: 'Melbourne High School', avg_hours: '1974' },
            { rank: 5, name: 'Fort Street High School', avg_hours: '1925' },
            { rank: 6, name: 'Sydney Girls High School', avg_hours: '1904' },
            { rank: 7, name: 'Abbotsleigh', avg_hours: '1883' },
            { rank: 8, name: 'Presbyterian Ladies College, Melbourne', avg_hours: '1856' },
            { rank: 9, name: 'Glenunga International School', avg_hours: '1832' },
            { rank: 10, name: 'Chatswood High School', avg_hours: '1759' },
        ],
        fields: [
            { key: 'rank', label: 'Ranking' },
            { key: 'name', label: 'School', sortDirection: 'desc' },
            { key: 'avg_hours', label: 'Hours per Student'}
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        sortBy: null,
        sortDesc: false,
        sortDirection: 'asc',
        filter: null
        }
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length
    },
    methods: {
        onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
        }
    }
}
</script>
