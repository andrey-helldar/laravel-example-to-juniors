<template>
      <div class="collection" v-if="items.length">
        <a href="#!" class="collection-item" v-for="item in items">{{ item.title }}</a>
      </div>

      <div class="collection" v-else>
        <a href="#!" class="collection-item red-text">-- no items --</a>
      </div>
</template>

<script>
    export default {
        data(){
            return {
                items: []
            };
        },
        ready() {
            console.log('Component ready.')
        },
        asyncData(){
            this.addItems();
        },
        methods: {
            addItems() {
                for(var i = 0; i < 5; i++) {
                    this.items.push({
                        title: 'Record #' + i
                    });
                }
            }
        }
    }
</script>
