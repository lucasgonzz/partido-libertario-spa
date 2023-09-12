<template>
	<b-row>
		<b-col
		class="m-t-50 d-none d-lg-block"
		cols="12"
		lg="10">
			<!-- <h1>Imagenes</h1> -->
			<b-carousel
			id="carousel-1"
			:interval="4000"
			img-width="1024"
			img-height="400">
				<b-carousel-slide 
				v-for="i in 7"
				:key="i"
				:img-src="require('../../assets/fotos/'+i+'.jpg')"></b-carousel-slide>
			</b-carousel>
		</b-col>
	</b-row>
</template>	