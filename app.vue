<template>
  <main class="main">
    <div class="ttt__score">счёт <br> {{ playerOne }} : {{ playerTwo }}</div>
    <div class="ttt">
      <button
        class="ttt__btn"
        v-for="(item, index) in field"
        :key="`btn_${index}`"
        @click.prevent="itemAction(index)"
        :disabled="[1, 2].includes(item)">
        <svg v-if="item === 1" width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M76.4194 63.7557L52.434 39.7704L76.4194 15.785C78.372 13.8323 78.372 10.6665 76.4194 8.71389L70.8268 3.12132C68.8742 1.1687 65.7084 1.1687 63.7557 3.12132L39.7703 27.1067L15.785 3.12132C13.8323 1.1687 10.6665 1.1687 8.71389 3.12132L3.12132 8.71389C1.1687 10.6665 1.1687 13.8323 3.12132 15.785L27.1067 39.7703L3.12132 63.7557C1.1687 65.7084 1.1687 68.8742 3.12132 70.8268L8.71389 76.4194C10.6665 78.372 13.8323 78.372 15.785 76.4194L39.7704 52.434L63.7557 76.4194C65.7084 78.372 68.8742 78.372 70.8268 76.4194L76.4194 70.8268C78.372 68.8742 78.372 65.7084 76.4194 63.7557Z" fill="#6433A3" stroke="#FAFAFA" stroke-width="2"/></svg>
        <svg v-else-if="item === 2" width="91" height="102" viewBox="0 0 91 102" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4404 93.4635L22.4453 93.4666C28.9721 97.5823 36.5235 99.6108 45.0284 99.6108C53.5324 99.6108 61.0662 97.5826 67.5561 93.4644C74.0591 89.3628 79.0949 83.6299 82.6649 76.327C86.2821 69.0078 88.0568 60.5212 88.0568 50.9233C88.0568 41.2486 86.2828 32.7037 82.6661 25.3452C79.0968 18.0034 74.0609 12.2488 67.555 8.14571C61.0653 4.02796 53.532 2 45.0284 2C36.5235 2 28.9721 4.02854 22.4453 8.14419L22.4404 8.14728C15.9744 12.2507 10.941 18.0039 7.33372 25.3413L7.3337 25.3413L7.32976 25.3494C3.75383 32.7068 2 41.2501 2 50.9233C2 60.5204 3.75474 69.0059 7.33167 76.3243L7.33569 76.3324C10.9438 83.6306 15.9772 89.3619 22.4404 93.4635ZM59.1114 78.7726C55.5272 81.6188 50.8853 83.1136 45.0284 83.1136C39.1715 83.1136 34.5296 81.6188 30.9455 78.7726C27.2459 75.8347 24.4847 71.9607 22.6754 67.0867C20.8398 62.1419 19.9119 56.7601 19.9119 50.9233C19.9119 45.0867 20.8398 39.6834 22.6771 34.6964C24.4882 29.7806 27.2523 25.8663 30.9548 22.8897C34.5387 20.0085 39.1771 18.4972 45.0284 18.4972C50.8797 18.4972 55.5181 20.0085 59.102 22.8897C62.8045 25.8663 65.5686 29.7806 67.3797 34.6964C69.217 39.6834 70.1449 45.0867 70.1449 50.9233C70.1449 56.7601 69.217 62.1419 67.3814 67.0867C65.5721 71.9607 62.8109 75.8347 59.1114 78.7726Z" fill="#FAFAFA" stroke="#6433A3" stroke-width="4"/></svg>
      </button>
    </div>
    <div class="ttt__msg" v-if="msg">{{ msg }}</div>
  </main>
</template>

<script lang="ts" setup>
const playerOne = ref<number>(0),
      playerTwo = ref<number>(0),
      msg = ref<string | boolean>(false)

const victory = ref<any>([
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
])

const turn = ref<number>(2)

const field = ref<Array[number]>([
  0, 0, 0,
  0, 0, 0,
  0, 0, 0,
])

const game = ref<Array[number]>([])

const getOne = () => {
  let arr = []
  field.value.forEach((item, index) => {
    if(item === 1){
      arr.push(index)
    }
  })
  return arr
}

const getTwo = () => {
  let arr = []
  field.value.forEach((item, index) => {
    if(item === 2){
      arr.push(index)
    }
  })
  return arr
}

const itemAction = (index) => {
  turn.value = turn.value === 1 ? 2 : 1
  field.value[index] = turn.value
  game.value.push(index)
  if(game.value.length > 6){
    field.value[game.value[0]] = 0
    game.value.splice(0, 1)
  }

  const oneArr = getOne()
  const twoArr = getTwo()

  for(let i = 0; i < victory.value.length; i++){
    const vc = victory.value[i]

    if( typeof vc.find(el => el === oneArr[0]) === 'number' && typeof vc.find(el => el === oneArr[1]) === 'number' && typeof vc.find(el => el === oneArr[2]) === 'number' ){
      msg.value = 'игрок 1 выиграл!'
      playerOne.value = playerOne.value + 1
      setTimeout(() => { clear() }, 1000)
      break;
    }

    if( typeof vc.find(el => el === twoArr[0]) === 'number' && typeof vc.find(el => el === twoArr[1]) === 'number' && typeof vc.find(el => el === twoArr[2]) === 'number' ){
      msg.value = 'игрок 2 выиграл!'
      playerTwo.value = playerTwo.value + 1
      setTimeout(() => { clear() }, 1000)
      break;
    }
  }
}

const clear = () => {
  turn.value = 2

  field.value = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
  ]

  game.value = []

  setTimeout(() => {
    msg.value = false
  }, 1000)
}
</script>

<style lang="scss" scoped>
.main{
  padding: 0 8px;
}
.ttt{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  height: calc(100vh - 80px);
  margin-top: 80px;
  padding-bottom: .5rem;
  &__btn{
    background: #0088CC;
    border-radius: res(4, 8);
    border: none;
    position: relative;
    svg{
      max-width: res(64, 128);
      max-height: res(64, 128);
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      path {
        fill: #fafafa;
      }
    }
    &:disabled{
      cursor: default;
      pointer-events: none;
    }
  }
  &__score{
    font-size: res(20, 32);
    font-weight: 700;
    text-align: center;
    padding: 1rem 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  &__msg {
    padding: 16px 0;
    text-align: center;
    font-size: res(22, 32);
    text-transform: uppercase;
  }
}
</style>