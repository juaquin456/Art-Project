<template>
  <div class="container">
    <h1>Brus Rubio Churay</h1>
  </div>
  <div class="content">
    <p>
      Este es un relato de vida profundamente enraizado en la rica herencia cultural de la Amazonía peruana. Desde su infancia en la comunidad de Pucaurquillo, este pintor autodidacta fue moldeado por las historias de sus padres y la sabiduría de los ancianos de su pueblo. Su encuentro con el antropólogo Jürg Gasché desencadenó un viaje de autoexploración y aprendizaje que lo llevó a descubrir su pasión por la pintura como medio de expresar la mitología, la historia y la cultura de su gente. A través de sus obras, busca tanto celebrar la alegría cósmica y la belleza de su entorno natural como abordar temas sociales y políticos que afectan a su comunidad y a la Amazonía en general.
      <br> 
      A medida que su arte lo llevó más allá de su pueblo natal, este pintor encontró nuevas perspectivas en las grandes ciudades del mundo, integrando sus experiencias urbanas en su obra y compartiendo su cultura ancestral con audiencias globales. Su viaje desde la selva amazónica hasta lugares como Lima, París, Washington, La Habana y Shanghai ha enriquecido su visión artística y lo ha llevado a reinterpretar y afirmar su identidad cultural como un componente vital de la diversidad cultural mundial.
    </p>
    <img class = "img" src="@/assets/brus.jpg" alt="">
  </div>
  <div class="container">
    <h2>Sus obras artísticas</h2>
  </div>
  <div class="carousel">
    <el-carousel :interval="4000" type="card" height="400px" style="width: 1000px;" autoplay>
      <el-carousel-item>
        <img src="https://static.wixstatic.com/media/43ce63_5fdebce863fe42dd98c6ec6631d5547d~mv2.gif" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="https://static.wixstatic.com/media/43ce63_91c5d1628bee4c678443923fc3c6e9df~mv2.gif" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="https://static.wixstatic.com/media/43ce63_17dd90c1a4834ed9bef162d49689ccfb~mv2.gif" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style>

body {
  background: #654ea3;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #3E5902, #D2D904);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #3E5902, #D2D904); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
h1 {
  padding-top: 20px;
  padding-bottom: 10px;
}

h2 {
  font-size: 1.5em;
  padding-top: 20px;
  padding-bottom: 10px;
}


.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 50px;
}

p {
  width: 50%;
  padding: 30px;
  text-align: justify;
}

.img {
  width: 300px;
  border-radius: 8px;
}

.carousel {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 50px;
}

.el-carousel__item img {
  height: 100%;
  border-radius: 8px;
}

.el-carousel__item:nth-child(2n) {
  /* background-color: #99a9bf; */
  border-radius: 8px;
}

.el-carousel__item:nth-child(2n + 1) {
  /* background-color: #d3dce6; */
  border-radius: 8px;
  
}
</style>
