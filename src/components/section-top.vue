<template>
    <div class="row margin">

        <div class="col-md-12 d-flex flex-column">
            <h1 class="title">HI, I'M CAUÃ NUNES</h1>
            <h2 class="subtitle">SOFTWARE ENGINEER</h2>
            <p class="text-title">
                Developer for over 4 years, working as a FullStack specialized in web technology.
            </p>
        </div>

        <div class="col-md-7">
            <button class="btn-download">DOWNLOAD CV</button>
        </div>

        <div class="col-md-5 d-flex justify-content-between image">
            <img src="@/assets/draw_top.svg" class="img-fluid" alt="draw" width="530">
        </div>


    <social-medias/>

    </div>
</template>

<script>
import socialMedias from "./social-medias.vue"

export default
 {
    name: 'section-top',
    components: { socialMedias }
}
</script>

<style scoped>

.margin{
    margin-top: 160px;
}
.title{
    font-size: calc(2vw + 4vh);
    font-family: Oswald;
    color: #3D4051;
    font-weight: bold;
    letter-spacing: 3px;
}

.subtitle{
    font-size: calc(2vw + 1vh);
    font-family: Oswald;
    color: #3D4051;
    font-weight: bold;
    letter-spacing: 3px;
}
.text-title{
    color: #878787;

}

.btn-download{
    font-weight: bold;
    color: #fff;
    background-color: #FF4546;
    padding: 15px 25px 15px 25px;
    border: none;
    border-radius: 5px;
}
.btn-download:hover{
    background-color: #fb3131;
}

@media(max-width: 768px){
    .image{
        margin-top: 50px;
    }
    .margin{
        margin-top: 70px;
    }
}
</style>