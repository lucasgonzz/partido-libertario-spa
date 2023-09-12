<template>
<div class="referents view">
    <b-row>
        <b-col
        cols="12">
               <h1
                class="m-t-50 m-b-50">
                    ¿Quienes son nuestros referentes?
                </h1>         
               <list></list>       
        </b-col>
    </b-row>
</div>
</template>

<script>
import List from '@/components/referents/List'
export default {
    name: 'Referents',
    components: {
        List,
    },
}
</script>
