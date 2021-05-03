<template>
  <div class="social">
      <div class="for" v-for="media of medias" :key="media.id">
          <div class="circle  rounded-circle d-flex justify-content-center mb-4">
              <img :src="require(`@/assets/${media.icon}`)" alt="icons" width="25">
          </div>
      </div>


  </div>
</template>

<script>
export default {
    name: 'social-medias',
    data(){
        return{
            medias:[
                {
                    name: 'Instagram',
                    icon: 'instagram.svg',
                    id: 1
                },
                {
                    name: 'Discord',
                    icon: 'discord.svg',
                    id: 2
                },
                {
                    name: 'Github',
                    icon: 'github.svg',
                    id: 2
                },
                {
                    name: 'linkedin',
                    icon: 'linkedin.svg',
                    id:3
                }
            ]
        }
    }
}
</script>

<style scoped>
.circle{
    background-color: #fff;
    width: 65px;
    height: 65px;
    box-shadow: 0 0 5px rgb(0, 0, 0,0.2);
    cursor: pointer;
}
</style>