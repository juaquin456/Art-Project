<template>
  <div class="container">
    <h1>Brus Rubio Churay</h1>
  </div>
  <div class="content">
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor vitae voluptas facilis facere consequuntur, est tempore aperiam totam sequi quia sed quod sint ratione unde nulla dolorem saepe, tenetur eligendi quidem recusandae fuga laudantium ipsum quae? Totam fuga facere modi sit nulla quae dolores corporis aliquid ex? Et cupiditate vel provident totam pariatur voluptatem fugiat tempore consequuntur porro velit! Facere dolorum quis nihil tenetur, aperiam placeat asperiores vitae qui laborum enim nostrum sunt mollitia inventore numquam ipsum molestias tempora facilis nobis natus molestiae vero voluptatum, iure delectus nulla? Tenetur non vel earum modi, numquam laborum molestiae repudiandae adipisci commodi accusamus?
    </p>
    <img class = "img" src="@/assets/brus.jpg" alt="">
  </div>
  <div class="carousel">
    <el-carousel :interval="4000" type="card" height="400px" style="width: 1000px;">
      <el-carousel-item>
        <img src="https://static.wixstatic.com/media/43ce63_5fdebce863fe42dd98c6ec6631d5547d~mv2.gif" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="https://static.wixstatic.com/media/43ce63_91c5d1628bee4c678443923fc3c6e9df~mv2.gif" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="https://static.wixstatic.com/media/43ce63_5fdebce863fe42dd98c6ec6631d5547d~mv2.gif" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>



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
}

.img {
  background-color: black;
  width: 300px;
}

.carousel {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 50px;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
