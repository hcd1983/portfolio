<template>
<div @click="count++">
  {{ title }}, {{ count }}
</div>
</template>

<script>
import { toRefs, toRef, ref } from "vue";

export default {
  name: "WorkGrid",
  props: {
    title: {
      type: String,
    }
  },
  setup(props) {
    const { title } = props
    const count = ref(0)
    return { count }
    // 将 `props` 转为一个其中全是 ref 的对象，然后解构
    // const { title } = toRefs(props)
    // `title` 是一个追踪着 `props.title` 的 ref
    // console.log(title.value)

    // 或者，将 `props` 的单个属性转为一个 ref
    // const title = toRef(props, 'title')
    // return { title }
  }
}
</script>

<style scoped>

</style>
