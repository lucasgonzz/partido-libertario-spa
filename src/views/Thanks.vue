<template>
<div class="thanks view">
    <b-row>
        <b-col
        cols="12"
        md="6"
        lg="4">
               <h3
               class="text-center">MUCHAS GRACIAS</h3>
               <p
               class="text-center">En breve te contactaremos para terminar tu Afiliación</p>  
               <div class="d-grid">
                   <b-button
                   block
                   :to="{name: 'Home', params: {view: 'ultimos-ingresados'}}"
                   variant="success">
                        <i class="icon-back"></i>
                       Regresar 
                   </b-button>    
               </div>
        </b-col>
    </b-row>
</div>
</template>

<script>
export default {
    name: 'Thanks',
    components: {
    },
}
</script>
<style lang="sass">
.thanks 
    h3 
        font-size: 2em
        font-weight: 800
        margin: 2em 0
    p 
        font-weight: 500
</style>
