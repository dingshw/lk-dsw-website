<template>
  <div class="buildingMap" :class="'from-' + from">
    <img class="mapbg" v-if="from == 1" src="https://storage.jd.com/jdlk-website/citymarketing/bigdatamap.png" alt />
    <img class="mapbg" v-if="from == 2" src="https://storage.jd.com/jdlk-website/business/aimap.png" alt />
    <img
      class="locationIcon"
      :class="'b' + activeLoctionId"
      src="https://storage.jd.com/jdlk-website/citymarketing/location.png"
      alt
    />

    <img
      class="buildingTag"
      :class="'b' + activeLoctionId"
      :src="'https://storage.jd.com/jdlk-website/citymarketing/card' + imgList[activeLoctionId] + '.png'"
      alt
    />

    <div class="cicirbox active" :class="'b' + activeLoctionId">
      <div class="cicir1 center"></div>
      <div class="cicir2 center"></div>
      <div class="cicir3 center"></div>
    </div>
    <template v-for="i in locationList">
      <div
        class="cicirbox gray"
        @click="activeLoctionId = i"
        :class="'c' + i"
        :key="'c' + i"
        v-show="i != activeLoctionId"
      >
        <img
          class="locationIcon gray"
          src="https://storage.jd.com/jdlk-website/citymarketing/locationgray.png"
          alt
        />
        <div class="cicir1 center"></div>
        <div class="cicir2 center"></div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'BuildingMap',
  props:['from'],
  data() {
    return {
      activeLoctionId: 5,
      locationList: [1, 2, 3, 4, 5],
      imgList: ['', '1', '2', '3-1', '4-1', '5-3'],
    };
  }
};
</script>

<style lang="scss" scoped>
.buildingMap {
  
  .mapbg {
    position: absolute;
    top: -79px;
    // top: -19px;
    right: -120px;
    // right: -360px;
    z-index: -1;
  }
  &.from-2{
    position: relative;
    top: 0px;
    right: 140px;
    .mapbg {
      top: -19px;
      right: -360px;
    }
  }
  .locationIcon {
    position: absolute;
    top: 213px;
    right: 180px;
    z-index: 13;
    &.b1 {
      top: 373px;
      right: 396px;
    }
    &.b2 {
      top: 88px;
      right: 394px;
    }
    &.b3 {
      top: 109px;
      right: 124px;
    }
    &.b4 {
      top: 411px;
      right: 118px;
    }
    &.b5 {
      top: 219px;
      right: 235px;
    }
    &.gray {
      top: -24px;
      right: 14px;
    }
  }
  .milesTag {
    position: absolute;
    top: 120px;
    right: -50px;
  }
  .cicirbox {
    position: absolute;
    width: 249px;
    top: 272px;
    right: 76px;
    &.active {
      animation: cicir1 2s infinite linear;
    }
    &.gray {
      width: 60px;
      height: 44px;
      cursor: pointer;
    }
    &.b1 {
      top: 434px;
      right: 292px;
    }
    &.b2 {
      top: 148px;
      right: 289px;
    }
    &.b3 {
      top: 168px;
      right: 19px;
    }
    &.b4 {
      top: 471px;
      right: 13px;
    }
    &.b5 {
      top: 277px;
      right: 130px;
    }
    &.c1 {
      top: 412px;
      right: 386px;
    }
    &.c2 {
      top: 126px;
      right: 382px;
    }
    &.c3 {
      top: 146px;
      right: 112px;
    }
    &.c4 {
      top: 448px;
      right: 107px;
    }
    &.c5 {
      top: 256px;
      right: 224px;
    }
  }
  .cicir1 {
    width: 33px;
    height: 24px;
    background: rgba(255, 255, 255, 1);
    opacity: 0.4;
    border-radius: 50%;
    z-index: 12;
  }

  .cicir2 {
    width: 60px;
    height: 44px;
    background: rgba(1, 97, 255, 1);
    opacity: 0.6;
    border-radius: 50%;
  }
  .cicir3 {
    width: 249px;
    height: 206px;
    background: radial-gradient(
      circle,
      rgba(1, 138, 255, 0) 0%,
      rgba(1, 97, 255, 1) 100%
    );
    opacity: 0.4;
    border-radius: 50%;
  }

  .buildingTag {
    position: absolute;
    width: 351px;
    height: 128px;
    z-index: 22;
    &.b1 {
      top: 244px;
      right: 115px;
    }
    &.b2 {
      top: -43px;
      right: 115px;
    }
    &.b3 {
      top: -23px;
      right: -35px;
    }
    &.b4 {
      top: 273px;
      right: -35px;
    }
    &.b5 {
      top: 89px;
      right: -45px;
    }
  }
}

.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes cicir1
{
0%   {transform: scale(0)}
100% {transform: scale(1)}
}
</style>
