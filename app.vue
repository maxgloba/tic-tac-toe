<template>
  <main class="main">
    <div class="ttt__score">SCORE <br> {{ playerOne }} : {{ playerTwo }}</div>
    <div class="ttt">
      <button
        class="ttt__btn"
        v-for="(item, index) in field"
        :key="`btn_${index}`"
        @click.prevent="itemAction(index)"
        :disabled="[1, 2].includes(item)">
        <svg v-if="item === 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#6433A3" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        <svg v-else-if="item === 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#F0F0F0" d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z"/></svg>
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
      msg.value = 'player one WON!'
      playerOne.value = playerOne.value + 1
      setTimeout(() => { clear() }, 1000)
      break;
    }

    if( typeof vc.find(el => el === twoArr[0]) === 'number' && typeof vc.find(el => el === twoArr[1]) === 'number' && typeof vc.find(el => el === twoArr[2]) === 'number' ){
      msg.value = 'player two WON!'
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
  padding: 0 10px;
}
.ttt{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: res(4, 8);
  max-width: 600px;
  margin: 16px auto;
  &__btn{
    background: #0088CC;
    border-radius: res(4, 8);
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    position: relative;
    @media(min-width:768px){
      height: 170px;
    }
    svg{
      max-width: res(64, 128);
      max-height: res(64, 128);
      path: {
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
    padding-top: 16px;
  }
  &__msg {
    padding: 16px 0;
    text-align: center;
    font-size: res(22, 32);
    text-transform: uppercase;
  }
}
</style>