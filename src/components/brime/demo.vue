<template>
<div class="demo">
<div class="components">
<vue-plyr-video />
<vue-plyr-audio />
<youtube />
<youtube-np />
<vimeo />
<vimeo-np />
</div>
</div>
</template>

<script>
import VuePlyrVideo from './video'

export default {
  name: 'Demo',
  components: {
    VuePlyrVideo,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
.demo {
font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #273849;
--plyr-color-main: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 100%) !important;
margin: 0 auto;
padding: 0 2rem;
}

.components > div {
margin-left: -60px;
margin-top: -31px;
max-width: 1340px;
}

h1 {
font-size: 3rem;
margin-bottom: 0;
}

h3 {
margin-top: 0;
margin-bottom: 2rem;
}
</style>
