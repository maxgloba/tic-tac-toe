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
        <svg v-if="item === 1" width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M76.4194 63.7557L52.434 39.7704L76.4194 15.785C78.372 13.8323 78.372 10.6665 76.4194 8.71389L70.8268 3.12132C68.8742 1.1687 65.7084 1.1687 63.7557 3.12132L39.7703 27.1067L15.785 3.12132C13.8323 1.1687 10.6665 1.1687 8.71389 3.12132L3.12132 8.71389C1.1687 10.6665 1.1687 13.8323 3.12132 15.785L27.1067 39.7703L3.12132 63.7557C1.1687 65.7084 1.1687 68.8742 3.12132 70.8268L8.71389 76.4194C10.6665 78.372 13.8323 78.372 15.785 76.4194L39.7704 52.434L63.7557 76.4194C65.7084 78.372 68.8742 78.372 70.8268 76.4194L76.4194 70.8268C78.372 68.8742 78.372 65.7084 76.4194 63.7557Z" fill="#6433A3" stroke="#FAFAFA" stroke-width="2"/></svg>
        <svg v-else-if="item === 2" width="87" height="98" viewBox="0 0 87 98" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9762 90.6192L20.9787 90.6207C27.3271 94.6239 34.6889 96.6108 43.0284 96.6108C51.3674 96.6108 58.7104 94.6241 65.0206 90.6198C71.3571 86.6238 76.2722 81.036 79.7668 73.8872C83.3048 66.7298 85.0568 58.3991 85.0568 48.9233C85.0568 39.3704 83.3053 30.9815 79.768 23.7852C76.2739 16.5967 71.3586 10.9878 65.0204 6.99084C58.7102 2.98664 51.3673 1 43.0284 1C34.6889 1 27.3271 2.98693 20.9787 6.99006L20.9762 6.99161C14.6779 10.9886 9.76392 16.5965 6.23113 23.7825L6.22916 23.7866C2.73167 30.9826 1 39.3708 1 48.9233C1 58.3984 2.73213 66.7283 6.23011 73.8851L6.23212 73.8892C9.76534 81.0359 14.6793 86.6231 20.9762 90.6192ZM57.7332 77.5557C53.9369 80.5704 49.0615 82.1136 43.0284 82.1136C36.9953 82.1136 32.1199 80.5704 28.3236 77.5557C24.4696 74.4951 21.6054 70.4654 19.7379 65.4347C17.8573 60.3685 16.9119 54.8677 16.9119 48.9233C16.9119 42.979 17.8573 37.4576 19.7388 32.3507C21.6071 27.2794 24.4727 23.2099 28.3283 20.1103C32.1245 17.0585 36.9981 15.4972 43.0284 15.4972C49.0587 15.4972 53.9323 17.0585 57.7286 20.1103C61.5841 23.2099 64.4497 27.2794 66.318 32.3507C68.1995 37.4576 69.1449 42.979 69.1449 48.9233C69.1449 54.8677 68.1995 60.3685 66.3189 65.4347C64.4514 70.4654 61.5873 74.4951 57.7332 77.5557Z" fill="#FAFAFA" stroke="#6433A3" stroke-width="2"/></svg>
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