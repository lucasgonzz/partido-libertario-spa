<template>
<div class="home view">
    <precentation></precentation>
    <mobile-buttons></mobile-buttons>
    <propuestas></propuestas>
    <afiliaciones></afiliaciones>
    <afiliaciones-info></afiliaciones-info>
    <redes></redes>
    <derechos></derechos>
</div>
</template>

<script>
import Precentation from '@/components/home/Precentation'
import MobileButtons from '@/components/home/MobileButtons'
import Propuestas from '@/components/home/Propuestas'
import Afiliaciones from '@/components/home/Afiliaciones'
import AfiliacionesInfo from '@/components/home/AfiliacionesInfo'
import Redes from '@/components/home/Redes'
import Derechos from '@/components/home/Derechos'
export default {
    name: 'Home',
    components: {
        Precentation,
        MobileButtons,
        Propuestas,
        Afiliaciones,
        AfiliacionesInfo,
        Redes,
        Derechos,
    },
    created() {
        this.$store.dispatch('referent/getModels')
    }
}
</script>
