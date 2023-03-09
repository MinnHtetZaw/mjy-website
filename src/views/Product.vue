<template>
  <Master>
    <div>
<!--      our product-->
      <div class="px-5 py-3">

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item w-100 active">
              <img src="../assets/factory1.png" class="d-block" style="border-radius: 15px;width: 100%;height: 500px;object-fit: cover;" alt="...">
            </div>
            <div class="carousel-item w-100">
              <img src="../assets/factory2.png" class="d-block" style="border-radius: 15px;width: 100%;height: 500px;object-fit: cover;" alt="...">
            </div>
            <div class="carousel-item w-100">
              <img src="../assets/factory.jpg" class="d-block" style="border-radius: 15px;width: 100%;height: 500px;object-fit: cover;" alt="...">
            </div>
          </div>
<!--          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">-->
<!--            <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--            <span class="visually-hidden">Previous</span>-->
<!--          </button>-->
<!--          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">-->
<!--            <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--            <span class="visually-hidden">Next</span>-->
<!--          </button>-->
        </div>
<!--        <div class="row">-->
<!--          <div class="col-6 mx-auto">-->
<!--            <div class="px-5 mb-5">-->
<!--              <img src="../assets/factory.jpg" style="width: 500px" class="rounded" alt="">-->

<!--            </div>-->
<!--            <div class="">-->
<!--              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">-->
<!--                <div class="carousel-inner">-->
<!--                  <div class="carousel-item active">-->
<!--                    <div class="d-flex gap-3 justify-content-end">-->
<!--                      <img src="../assets/team4.png" class="rounded" style="width: 200px;" alt="...">-->
<!--                      <img src="../assets/team2.png" class="rounded" style="width: 200px;" alt="...">-->
<!--                      <img src="../assets/team1.png" class="rounded" style="width: 200px;" alt="...">-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="carousel-item">-->
<!--                    <div class="d-flex gap-3 justify-content-end">-->
<!--                      <img src="../assets/team2.png" class="rounded" style="width: 200px;" alt="...">-->
<!--                      <img src="../assets/team2.png" class="rounded" style="width: 200px;" alt="...">-->
<!--                      <img src="../assets/team2.png" class="rounded" style="width: 200px;" alt="...">-->
<!--                    </div>-->

<!--                  </div>-->
<!--                  <div class="carousel-item">-->
<!--                    <div class="d-flex gap-3 justify-content-end">-->
<!--                      <img src="../assets/factory2.png" class="rounded" style="width: 200px;" alt="...">-->
<!--                      <img src="../assets/factory1.png" class="rounded" style="width: 200px;" alt="...">-->
<!--                      <img src="../assets/factory.jpg" class="rounded" style="width: 200px;" alt="...">-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">-->
<!--                  <i class="fa-solid fa-chevron-left fs-2"></i>-->
<!--                  <span class="visually-hidden">Previous</span>-->
<!--                </button>-->
<!--                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">-->
<!--                  <i class="fa-solid fa-chevron-right fs-2"></i>-->
<!--                  <span class="visually-hidden">Next</span>-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--&lt;!&ndash;          <div class="col-6">&ndash;&gt;-->
<!--&lt;!&ndash;            <p class="product-title">Product Name</p>&ndash;&gt;-->
<!--&lt;!&ndash;            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illum magnam natus praesentium provident quaerat quasi, temporibus! Corporis debitis dicta iste perspiciatis sunt? Amet beatae eius iure neque non temporibus!</p>&ndash;&gt;-->
<!--&lt;!&ndash;            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illum magnam natus praesentium provident quaerat quasi, temporibus! Corporis debitis dicta iste perspiciatis sunt? Amet beatae eius iure neque non temporibus!</p>&ndash;&gt;-->
<!--&lt;!&ndash;            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illum magnam natus praesentium provident quaerat quasi, temporibus! Corporis debitis dicta iste perspiciatis sunt? Amet beatae eius iure neque non temporibus!</p>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--        </div>-->

      </div>
      <!--  product table-->
      <div class="product-table p-5">
        <div>
          <p class="product-table-title">Disposable Syringes With Needle</p>
          <p class="product-table-text">
            The needles used are imported from Korea and are CE Mark (EN 46001)
            and ISO 9001 certified. <br>
            Currently MJY is producing four types of syringes such as:
            (1)3cc, (2) 5cc, (3) 10cc and (4) 20cc.
          </p>
        </div>
        <div class="px-5 pt-3">
          <table style="background: #108c68;" class="table">
            <thead>
            <tr>
              <th rowspan="2" class="text-center fw-normal text-white text-uppercase pb-4">syringe size</th>
              <th rowspan="2" class="text-center fw-normal text-white text-uppercase pb-4">type</th>
              <th colspan="3" class="text-center fw-normal text-white text-uppercase">Packing Style</th>
            </tr>
            <tr>
              <th style="font-size: 13px;" class="text-center fw-normal text-white text-uppercase">pcs per box</th>
              <th style="font-size: 13px;" class="text-center fw-normal text-white text-uppercase">boxes per carton</th>
              <th style="font-size: 13px;" class="text-center fw-normal text-white text-uppercase">cartons per 20ft fcl</th>
            </tr>

            </thead>
            <tbody class="text-white">
            <tr class="text-center">
              <td>3cc</td>
              <td>Central Luer with Luer Slip Tip</td>
              <td>120</td>
              <td>30</td>
              <td>160</td>
            </tr>
            <tr class="text-center">
              <td>5cc</td>
              <td>Central Luer with Luer Slip Tip</td>
              <td>100</td>
              <td>30</td>
              <td>160</td>
            </tr>
            <tr class="text-center">
              <td>10cc</td>
              <td>Central Luer with Luer Slip Tip</td>
              <td>100</td>
              <td>12</td>
              <td>280</td>
            </tr>
            <tr class="text-center">
              <td>20cc</td>
              <td>Eccentric Luer with Luer Slip Tip</td>
              <td>50</td>
              <td>16</td>
              <td>260</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!--  DISPOSABLE SYRINGE-->
      <div class="disposable-bg">
        <div class="green-filter vh-100">
          <div class="py-4 px-5">
            <div class="mb-3">
              <p class="disposable-title">MJY Sterilized Disposable Syringe</p>
            </div>
            <div  class="d-flex justify-content-center">
              <img src="../assets/qurantine.png" class="disposable-img rounded" alt="">
            </div>
<!--            <div style="position: relative;">-->
<!--&lt;!&ndash;              <div style="position: absolute;left: 50px;top: 150px;z-index: 1" class="disposable-card card rounded border-0">&ndash;&gt;-->
<!--&lt;!&ndash;                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At debitis doloremque explicabo ipsa ipsam iusto magni molestiae ratione saepe voluptates! Ad ea quas voluptate! Ab cum eaque labore sed ullam.&ndash;&gt;-->
<!--&lt;!&ndash;                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam deserunt earum eligendi iste laborum maxime minima, omnis perferendis quae quas qui quibusdam saepe tempora temporibus veniam vero. Vero.&ndash;&gt;-->
<!--&lt;!&ndash;                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut beatae corporis dolore ea hic illum ipsa iste laborum necessitatibus, nisi nobis odio quam, quas quasi, quos sit soluta unde.&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--              -->
<!--            </div>-->
          </div>
        </div>
      </div>

      <!--  PRODUCT SPECIFICATION-->
      <div>
        <div class="mb-5">
          <p class="product-spec-title">PRODUCT SPECIFICATION</p>
        </div>
        <div class="d-flex justify-content-center gap-5 mb-5">
          <div class="product-spec-card card rounded border-0 shadow-sm">
            <div class="product-spec-card-header card-header text-uppercase">
              3 CC Disposable Syringe <br> with Needle
            </div>
            <div class="card-body product-spec-card-body px-3">
              <div class="row">
                <div class="col-6">
                  <p>Size</p>
                </div>
                <div class="col-6">
                  <p>- 3CC</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>FIGURE OF TIP</p>
                </div>
                <div class="col-6">
                  <p>- LUER SLIP</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>LOCATION OF TIP</p>
                </div>
                <div class="col-6">
                  <p>- CENTRIC</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>COMBINED NEEDLE</p>
                </div>
                <div class="col-6">
                  <p>- 23 G X 1¼"</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>SCALE COLOUR</p>
                </div>
                <div class="col-6">
                  <p>- BLACK</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>MATERIAL STATE</p>
                </div>
                <div class="col-6">
                  <p>- MEDICAL GRADE</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>PACKAGE STATE</p>
                </div>
                <div class="col-6">
                  <p>- HDPE POLY BAG</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>PACKAGE (INNER BOX)</p>
                </div>
                <div class="col-6">
                  <p>- 120 PCS</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>PACKAGE (OUTER BOX)</p>
                </div>
                <div class="col-6">
                  <p>- 3600 PCS</p>
                </div>
              </div>

              <div class="row">
                <div class="col-6">
                  <p>SHIFT LIFE</p>
                </div>
                <div class="col-6">
                  <p>- 3 YEAR</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>STERILIZE</p>
                </div>
                <div class="col-6">
                  <p>- ETHYLENE OXIDE GAS</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>OTHER</p>
                </div>
                <div class="col-6">
                  <p class="text-uppercase">- Non Toxic, Pyrogen Free</p>
                </div>
              </div>

            </div>
          </div>
          <div class="product-spec-card card rounded border-0 shadow-sm">
            <div class="product-spec-card-header card-header">
              5 CC DISPOSABLE SYRINGE <br>
              WITH NEEDLE
            </div>
            <div class="card-body product-spec-card-body px-3">
              <div class="row">
                <div class="col-6">
                  <p>Size</p>
                </div>
                <div class="col-6">
                  <p>- 5CC</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>FIGURE OF TIP</p>
                </div>
                <div class="col-6">
                  <p>- LUER SLIP</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>LOCATION OF TIP</p>
                </div>
                <div class="col-6">
                  <p>- CENTRIC</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>COMBINED NEEDLE</p>
                </div>
                <div class="col-6">
                  <p>- 23 G X 1¼"</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>SCALE COLOUR</p>
                </div>
                <div class="col-6">
                  <p>- BLACK</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>MATERIAL STATE</p>
                </div>
                <div class="col-6">
                  <p>- MEDICAL GRADE</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>PACKAGE STATE</p>
                </div>
                <div class="col-6">
                  <p>- HDPE POLY BAG</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>PACKAGE (INNER BOX)</p>
                </div>
                <div class="col-6">
                  <p>- 100 PCS</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>PACKAGE (OUTER BOX)</p>
                </div>
                <div class="col-6">
                  <p>- 3000 PCS</p>
                </div>
              </div>

              <div class="row">
                <div class="col-6">
                  <p>SHIFT LIFE</p>
                </div>
                <div class="col-6">
                  <p>- 3 YEAR</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>STERILIZE</p>
                </div>
                <div class="col-6">
                  <p>- ETHYLENE OXIDE GAS</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>OTHER</p>
                </div>
                <div class="col-6">
                  <p class="text-uppercase">- Non Toxic, Pyrogen Free</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center gap-5 mb-5">
          <div class="product-spec-card card rounded border-0 shadow-sm">
            <div class="product-spec-card-header card-header">
              10 CC DISPOSABLE SYRINGE <br>
              WITH NEEDLE
            </div>
            <div class="card-body product-spec-card-body px-3">
              <div class="row">
                <div class="col-6">
                  <p>Size</p>
                </div>
                <div class="col-6">
                  <p>- 10CC</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>FIGURE OF TIP</p>
                </div>
                <div class="col-6">
                  <p>- LUER SLIP</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>LOCATION OF TIP</p>
                </div>
                <div class="col-6">
                  <p>- CENTRIC</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>COMBINED NEEDLE</p>
                </div>
                <div class="col-6">
                  <p>- 23 G X 1¼"</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>SCALE COLOUR</p>
                </div>
                <div class="col-6">
                  <p>- BLACK</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>MATERIAL STATE</p>
                </div>
                <div class="col-6">
                  <p>- MEDICAL GRADE</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>PACKAGE STATE</p>
                </div>
                <div class="col-6">
                  <p>- HDPE POLY BAG</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>PACKAGE (INNER BOX)</p>
                </div>
                <div class="col-6">
                  <p>- 100 PCS</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>PACKAGE (OUTER BOX)</p>
                </div>
                <div class="col-6">
                  <p>- 1200 PCS</p>
                </div>
              </div>

              <div class="row">
                <div class="col-6">
                  <p>SHIFT LIFE</p>
                </div>
                <div class="col-6">
                  <p>- 3 YEAR</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>STERILIZE</p>
                </div>
                <div class="col-6">
                  <p>- ETHYLENE OXIDE GAS</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>OTHER</p>
                </div>
                <div class="col-6">
                  <p class="text-uppercase">- Non Toxic, Pyrogen Free</p>
                </div>
              </div>

            </div>
          </div>
          <div class="product-spec-card card rounded border-0 shadow-sm">
            <div class="product-spec-card-header card-header">
              20 CC DISPOSABLE SYRINGE <br>
              WITH NEEDLE
            </div>
            <div class="card-body product-spec-card-body px-3">
              <div class="row">
                <div class="col-6">
                  <p>Size</p>
                </div>
                <div class="col-6">
                  <p>- 20 CC</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>FIGURE OF TIP</p>
                </div>
                <div class="col-6">
                  <p>- LUER SLIP</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>LOCATION OF TIP</p>
                </div>
                <div class="col-6">
                  <p class="text-uppercase">- Eccentric</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>COMBINED NEEDLE</p>
                </div>
                <div class="col-6">
                  <p>- 23 G X 1¼"</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>SCALE COLOUR</p>
                </div>
                <div class="col-6">
                  <p>- BLACK</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>MATERIAL STATE</p>
                </div>
                <div class="col-6">
                  <p>- MEDICAL GRADE</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>PACKAGE STATE</p>
                </div>
                <div class="col-6">
                  <p>- HDPE POLY BAG</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>PACKAGE (INNER BOX)</p>
                </div>
                <div class="col-6">
                  <p>- 50 PCS</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>PACKAGE (OUTER BOX)</p>
                </div>
                <div class="col-6">
                  <p>- 800 PCS</p>
                </div>
              </div>

              <div class="row">
                <div class="col-6">
                  <p>SHIFT LIFE</p>
                </div>
                <div class="col-6">
                  <p>- 3 YEAR</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>STERILIZE</p>
                </div>
                <div class="col-6">
                  <p>- ETHYLENE OXIDE GAS</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <p>OTHER</p>
                </div>
                <div class="col-6">
                  <p class="text-uppercase">- Non Toxic, Pyrogen Free</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </Master>
</template>

<script>
import Master from "@/components/Master";
export default {
  name: "Product",
  components: {Master}
}
</script>

<style scoped>
th{
  font-size: 20px;
  border: 2px solid #ffffff;
}
td{
  font-size: 14px;
  line-height: 40px;
  border-bottom: 0;
  border-right: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
}
.carousel-item{
  width: 700px;
}
.carousel-control-prev {
  left: -30px !important;
  color: #108c68 !important;
  background: none !important;
}
.carousel-control-next {
  right: -90px !important;
  color: #108c68 !important;
  background: none !important;
}

.carousel-indicators [data-bs-target] {
  background-color: #108c68 !important;
}
</style>