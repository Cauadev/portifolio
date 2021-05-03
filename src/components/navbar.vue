<template>


      <nav class="navbar-custom  pt-3 ps-4 pe-4 pb-3 ">

          <div class="perfil d-flex align-items-center">
              <img src="@/assets/perfil.png" class="rounded-circle" alt="logo" width="101">
              <div class="info d-flex flex-column ms-4">
                  <span class="name">CAUÃ NUNES</span>
                  <span class="profession">Software Engineer</span>
              </div>
          </div>


  <div class="items d-flex align-items-center pt-3">

      <ul class="d-flex list main-ul">

        <li>
          <a class="nav-link" href="#">Home</a>
        </li>
        <li>
          <a class="nav-link" href="#">About</a>
        </li>
        <li>
          <a class="nav-link" href="#">Jobs</a>
        </li>
      </ul>

        <div>
         <a href="/contact" class="btn-contact">Contact</a>
        </div>
    </div>

    <img class="menu" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" src="@/assets/menu.svg" width="50">

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                 <a href="/contact" class="btn btn-outline-dark btn-lg show">Contact</a>

                       <div class="d-flex flex-column align-items-center mt-4">
                           <a class="nav-link mb-4" href="#">Home</a>
                           <a class="nav-link mb-4" href="#">About</a>
                           <a class="nav-link" href="#">Jobs</a>
                       </div>

            </div>
            </div>
</nav>

</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style scoped>

.show{
    display: block!important;
}

ul{
    list-style: none;
}

.nav-link{
    font-family: 'Orelega One';
    font-size: 23px;
    color: rgb(0, 0, 0);
}

.nav-link:hover{
    color: rgba(139, 139, 139, 0.5);
}

.btn-contact{
    color: white;
    text-decoration: none;
    font-weight: bold;
    background-color: #16BC55;
    letter-spacing: 2px;
    padding: 10px 60px 10px 60px;
    border-radius: 5px;
    font-size: 20px;
    transition: 850ms;
    text-align: center;
}
.btn-contact:hover{
        background-color: #05a342;
}

.icon{
    color: #000;
    font-size: 65px;
    cursor: pointer;
}

.name{
    font-size: 23px;
    color: #727171;
    font-weight: bold;
}

.profession{
    font-size: 16px;
    color: #BEBEBE;
    font-weight: bold;
}

.navbar-custom{
    display: flex;
    justify-content: space-between;
    align-items: start;
}

.list{
    margin-bottom: 0;
}
.main-ul > li{
 margin-right: 115px;
}

.menu{
    display: none;
}

/* 1395 */
@media(max-width: 1395px){
.btn-contact{
    display: none;
}
.main-ul, .main-ul > li{
    display: none;
}
.menu{
    display: block;
    cursor: pointer;
}
}

@media(max-width: 475px){
    .menu{
        display: none;
    }
    .navbar-custom{
        justify-content: center;
    }
}
</style>