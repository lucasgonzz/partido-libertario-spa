<template>
<div class="collaborate view">
    <b-row>
        <b-col
        cols="12"
        lg="8">
               <affiliation-form></affiliation-form>      
        </b-col>
    </b-row>
</div>
</template>

<script>
import AffiliationForm from '@/components/common/AffiliationForm'
export default {
    name: 'Referents',
    components: {
        AffiliationForm,
    },
}
</script>
