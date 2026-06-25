<template>
  <main class="flex flex-col h-full overflow-hidden p-2">

    <!-- ── Header ── -->
    <div class="flex flex-col gap-2 pb-4 shrink-0">

      <!-- Icons + score -->
      <div class="flex items-center justify-between">
        <div class="flex flex-1 justify-center transition-opacity duration-200" :class="turn === 1 ? 'opacity-100' : 'opacity-30'">
          <svg class="icon-x icon-header" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M76.4194 63.7557L52.434 39.7704L76.4194 15.785C78.372 13.8323 78.372 10.6665 76.4194 8.71389L70.8268 3.12132C68.8742 1.1687 65.7084 1.1687 63.7557 3.12132L39.7703 27.1067L15.785 3.12132C13.8323 1.1687 10.6665 1.1687 8.71389 3.12132L3.12132 8.71389C1.1687 10.6665 1.1687 13.8323 3.12132 15.785L27.1067 39.7703L3.12132 63.7557C1.1687 65.7084 1.1687 68.8742 3.12132 70.8268L8.71389 76.4194C10.6665 78.372 13.8323 78.372 15.785 76.4194L39.7704 52.434L63.7557 76.4194C65.7084 78.372 68.8742 78.372 70.8268 76.4194L76.4194 70.8268C78.372 68.8742 78.372 65.7084 76.4194 63.7557Z" fill="#a855f7"/>
          </svg>
        </div>

        <div class="flex items-center gap-1 shrink-0">
          <span class="score-num">{{ scoreOne }}</span>
          <span class="text-4xl font-bold text-white/40">:</span>
          <span class="score-num">{{ scoreTwo }}</span>
        </div>

        <div class="flex flex-1 justify-center transition-opacity duration-200" :class="turn === 2 ? 'opacity-100' : 'opacity-30'">
          <svg class="icon-o icon-header" viewBox="0 0 91 102" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.4404 93.4635L22.4453 93.4666C28.9721 97.5823 36.5235 99.6108 45.0284 99.6108C53.5324 99.6108 61.0662 97.5826 67.5561 93.4644C74.0591 89.3628 79.0949 83.6299 82.6649 76.327C86.2821 69.0078 88.0568 60.5212 88.0568 50.9233C88.0568 41.2486 86.2828 32.7037 82.6661 25.3452C79.0968 18.0034 74.0609 12.2488 67.555 8.14571C61.0653 4.02796 53.532 2 45.0284 2C36.5235 2 28.9721 4.02854 22.4453 8.14419L22.4404 8.14728C15.9744 12.2507 10.941 18.0039 7.33372 25.3413L7.3337 25.3413L7.32976 25.3494C3.75383 32.7068 2 41.2501 2 50.9233C2 60.5204 3.75474 69.0059 7.33167 76.3243L7.33569 76.3324C10.9438 83.6306 15.9772 89.3619 22.4404 93.4635ZM59.1114 78.7726C55.5272 81.6188 50.8853 83.1136 45.0284 83.1136C39.1715 83.1136 34.5296 81.6188 30.9455 78.7726C27.2459 75.8347 24.4847 71.9607 22.6754 67.0867C20.8398 62.1419 19.9119 56.7601 19.9119 50.9233C19.9119 45.0867 20.8398 39.6834 22.6771 34.6964C24.4882 29.7806 27.2523 25.8663 30.9548 22.8897C34.5387 20.0085 39.1771 18.4972 45.0284 18.4972C50.8797 18.4972 55.5181 20.0085 59.102 22.8897C62.8045 25.8663 65.5686 29.7806 67.3797 34.6964C69.217 39.6834 70.1449 45.0867 70.1449 50.9233C70.1449 56.7601 69.217 62.1419 67.3814 67.0867C65.5721 71.9607 62.8109 75.8347 59.1114 78.7726Z" fill="#a855f7"/>
          </svg>
        </div>
      </div>

      <!-- Name buttons -->
      <div class="flex gap-2">
        <button
          class="name-btn flex-1 min-w-0 h-[38px] flex items-center gap-2 px-3 rounded-lg cursor-pointer transition-all duration-150"
          :class="turn === 1 ? 'name-btn--active' : ''"
          @click="startEdit(1)"
        >
          <input v-if="editingPlayer === 1" ref="inputOne" v-model="nameOne" class="flex-1 min-w-0 bg-transparent border-none outline-none text-sm font-semibold text-zinc-50" maxlength="16" @blur="stopEdit" @keydown.enter="stopEdit" @keydown.escape="stopEdit" @click.stop/>
          <span v-else class="flex-1 min-w-0 text-sm font-semibold text-zinc-50 truncate text-left">{{ nameOne }}</span>
          <svg v-if="editingPlayer !== 1" class="w-4 h-4 shrink-0 opacity-40 text-zinc-50" viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>

        <button
          class="name-btn flex-1 min-w-0 h-[38px] flex items-center gap-2 px-3 rounded-lg cursor-pointer transition-all duration-150"
          :class="turn === 2 ? 'name-btn--active' : ''"
          @click="startEdit(2)"
        >
          <input v-if="editingPlayer === 2" ref="inputTwo" v-model="nameTwo" class="flex-1 min-w-0 bg-transparent border-none outline-none text-sm font-semibold text-zinc-50" maxlength="16" @blur="stopEdit" @keydown.enter="stopEdit" @keydown.escape="stopEdit" @click.stop/>
          <span v-else class="flex-1 min-w-0 text-sm font-semibold text-zinc-50 truncate text-left">{{ nameTwo }}</span>
          <svg v-if="editingPlayer !== 2" class="w-4 h-4 shrink-0 opacity-40 text-zinc-50" viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </div>

    <!-- ── Board ── -->
    <div class="grid grid-cols-3 gap-y-4 gap-x-2 flex-1 min-h-0 pb-2">
      <button
        v-for="(item, index) in field"
        :key="`btn_${index}`"
        class="ttt-btn relative border-none cursor-pointer disabled:cursor-default disabled:pointer-events-none"
        :class="{ 'ttt-btn--win': winCells.includes(index), 'animate-fade-cell': fadingIndex === index }"
        @click.prevent="itemAction(index)"
        :disabled="[1, 2].includes(item) || !!modalMsg"
      >
        <!-- X symbol -->
        <svg v-if="item === 1" class="icon-x icon-cell animate-pop-in" viewBox="0 0 79 79" fill="none">
          <path d="M76.4194 63.7557L52.434 39.7704L76.4194 15.785C78.372 13.8323 78.372 10.6665 76.4194 8.71389L70.8268 3.12132C68.8742 1.1687 65.7084 1.1687 63.7557 3.12132L39.7703 27.1067L15.785 3.12132C13.8323 1.1687 10.6665 1.1687 8.71389 3.12132L3.12132 8.71389C1.1687 10.6665 1.1687 13.8323 3.12132 15.785L27.1067 39.7703L3.12132 63.7557C1.1687 65.7084 1.1687 68.8742 3.12132 70.8268L8.71389 76.4194C10.6665 78.372 13.8323 78.372 15.785 76.4194L39.7704 52.434L63.7557 76.4194C65.7084 78.372 68.8742 78.372 70.8268 76.4194L76.4194 70.8268C78.372 68.8742 78.372 65.7084 76.4194 63.7557Z" fill="#a855f7"/>
        </svg>
        <!-- O symbol -->
        <svg v-else-if="item === 2" class="icon-o icon-cell animate-pop-in" viewBox="0 0 91 102" fill="none">
          <path d="M22.4404 93.4635L22.4453 93.4666C28.9721 97.5823 36.5235 99.6108 45.0284 99.6108C53.5324 99.6108 61.0662 97.5826 67.5561 93.4644C74.0591 89.3628 79.0949 83.6299 82.6649 76.327C86.2821 69.0078 88.0568 60.5212 88.0568 50.9233C88.0568 41.2486 86.2828 32.7037 82.6661 25.3452C79.0968 18.0034 74.0609 12.2488 67.555 8.14571C61.0653 4.02796 53.532 2 45.0284 2C36.5235 2 28.9721 4.02854 22.4453 8.14419L22.4404 8.14728C15.9744 12.2507 10.941 18.0039 7.33372 25.3413L7.3337 25.3413L7.32976 25.3494C3.75383 32.7068 2 41.2501 2 50.9233C2 60.5204 3.75474 69.0059 7.33167 76.3243L7.33569 76.3324C10.9438 83.6306 15.9772 89.3619 22.4404 93.4635ZM59.1114 78.7726C55.5272 81.6188 50.8853 83.1136 45.0284 83.1136C39.1715 83.1136 34.5296 81.6188 30.9455 78.7726C27.2459 75.8347 24.4847 71.9607 22.6754 67.0867C20.8398 62.1419 19.9119 56.7601 19.9119 50.9233C19.9119 45.0867 20.8398 39.6834 22.6771 34.6964C24.4882 29.7806 27.2523 25.8663 30.9548 22.8897C34.5387 20.0085 39.1771 18.4972 45.0284 18.4972C50.8797 18.4972 55.5181 20.0085 59.102 22.8897C62.8045 25.8663 65.5686 29.7806 67.3797 34.6964C69.217 39.6834 70.1449 45.0867 70.1449 50.9233C70.1449 56.7601 69.217 62.1419 67.3814 67.0867C65.5721 71.9607 62.8109 75.8347 59.1114 78.7726Z" fill="#a855f7"/>
        </svg>
      </button>
    </div>

    <!-- ── Modal ── -->
    <Transition name="modal">
      <div v-if="modalMsg" class="fixed inset-0 bg-black/65 flex items-center justify-center z-[100] backdrop-blur-sm">
        <div class="modal-box bg-slate-900 border-2 border-violet-700 rounded-2xl px-16 py-12 flex flex-col items-center gap-5 min-w-[280px] text-center">
          <div class="text-6xl leading-none">{{ modalEmoji }}</div>
          <div class="text-2xl font-bold uppercase tracking-wide text-white">{{ modalMsg }}</div>
          <div class="text-5xl font-bold tabular-nums" style="background: linear-gradient(135deg,#e879f9,#7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">{{ countdown }}</div>
        </div>
      </div>
    </Transition>

  </main>
</template>

<script lang="ts" setup>
const nameOne = ref('Игрок X')
const nameTwo = ref('Игрок O')
const scoreOne = ref(0)
const scoreTwo = ref(0)
const editingPlayer = ref<1 | 2 | null>(null)
const inputOne = ref<HTMLInputElement | null>(null)
const inputTwo = ref<HTMLInputElement | null>(null)

const VICTORIES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 4, 8], [2, 4, 6],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
]

const turn = ref<1 | 2>(1)
const field = ref<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0])
const game = ref<number[]>([])
const winCells = ref<number[]>([])
const fadingIndex = ref<number | null>(null)
const modalMsg = ref('')
const modalEmoji = ref('')
const countdown = ref(6)

function startEdit(player: 1 | 2) {
  if (modalMsg.value) return
  editingPlayer.value = player
  nextTick(() => {
    if (player === 1) inputOne.value?.focus()
    else inputTwo.value?.focus()
  })
}

function stopEdit() {
  if (editingPlayer.value === 1 && !nameOne.value.trim()) nameOne.value = 'Игрок X'
  if (editingPlayer.value === 2 && !nameTwo.value.trim()) nameTwo.value = 'Игрок O'
  editingPlayer.value = null
}

function getIndicesOf(player: number) {
  return field.value.reduce<number[]>((acc, v, i) => { if (v === player) acc.push(i); return acc }, [])
}

function checkWin(indices: number[]) {
  return VICTORIES.find(combo => combo.every(i => indices.includes(i))) ?? null
}

function itemAction(index: number) {
  if (field.value[index] !== 0 || modalMsg.value) return

  const current = turn.value
  field.value[index] = current
  game.value.push(index)

  if (game.value.length > 6) {
    const removed = game.value.shift()!
    fadingIndex.value = removed
    setTimeout(() => {
      field.value[removed] = 0
      fadingIndex.value = null
    }, 280)
  }

  const winCombo = checkWin(getIndicesOf(current))

  if (winCombo) {
    winCells.value = winCombo
    if (current === 1) {
      scoreOne.value++
      modalEmoji.value = '🎉'
      modalMsg.value = `${nameOne.value} победил!`
    } else {
      scoreTwo.value++
      modalEmoji.value = '🏆'
      modalMsg.value = `${nameTwo.value} победил!`
    }
    resetBoard()
    startCountdown()
    return
  }

  turn.value = current === 1 ? 2 : 1
}

function resetBoard() {
  winCells.value = []
  field.value = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  game.value = []
  fadingIndex.value = null
  turn.value = 1
}

function startCountdown() {
  countdown.value = 6
  const id = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(id)
      closeModal()
    }
  }, 1000)
}

function closeModal() {
  modalMsg.value = ''
  modalEmoji.value = ''
  countdown.value = 6
}
</script>
