<template>
<router-link class="inline-block p-2" :to="routerLink">
    <svg v-if="dotIndex == pageIndex" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"><g transform="translate(-119 -49)"><g class="dot1-a" transform="translate(119 49)"><circle class="dot1-c" cx="5.5" cy="5.5" r="5.5"/><circle class="dot1-d" cx="5.5" cy="5.5" r="3"/></g><g class="dot1-b" transform="translate(122 52)"><circle class="dot1-c" cx="2.5" cy="2.5" r="2.5"/><circle class="dot1-d" cx="2.5" cy="2.5" r="2"/></g></g></svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5"><g class="dot2-a"><circle class="dot2-b" cx="2.5" cy="2.5" r="2.5"/><circle class="dot2-c" cx="2.5" cy="2.5" r="2"/></g></svg>
</router-link>
</template>

<script>
    export default{
        props: {
            id: {
                type: String
            },
            dotIndex: {
                type: String,
                required: true
            },
            pageIndex: {
                type: String,
                required: true
            }
        },
        computed: {
            routerLink(){
                return '/recipe/' + this.id + '/' + this.pageIndex;
            }
        }
    };
</script>

<style scoped>
    .dot1-a,.dot1-b{fill:#fff;stroke:#000;}.dot1-a{stroke-width:5px;}.dot1-c{stroke:none;}.dot1-d{fill:none;}

    .dot2-a{fill:#fff;stroke:#707070;}.dot2-b{stroke:none;}.dot2-c{fill:none;}
</style>