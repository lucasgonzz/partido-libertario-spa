<template>
<div class="images view">
    <image-modal></image-modal>
    <carousel></carousel>
    <images></images> 
</div>
</template>

<script>
import ImageModal from '@/components/images/ImageModal'
import Carousel from '@/components/images/Carousel'
import Images from '@/components/images/Images'
export default {
    name: 'ImagesView',
    components: {
        ImageModal,
        Carousel,
        Images,
    },
}
</script>
