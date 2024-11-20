<script lang="jsx">
import { ref, unref, watch, defineComponent, onUnmounted, computed } from 'vue'
export default defineComponent({
  name: 'TextFold',
  props: {
    line: { type: Number, default: 3 },
    text: { type: String, default: '' },
    modelValue: { type: Boolean, default: undefined }
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const { line, text } = props
    const boxRef = ref(null)
    const contentRef = ref(null)
    let observer = null
    const needFold = ref(false)
    const lineHeight = ref()
    const isHasValue = props.modelValue !== undefined

    const innerValue = ref(true)

    const foldState = computed({
      get() {
        return isHasValue ? props.modelValue : innerValue.value
      },
      set(value) {
        if (isHasValue) {
          emit('update:modelValue', value)
        } else {
          innerValue.value = value
        }
      }
    })

    const toggleStatus = () => {
      if (isHasValue) {
        foldState.value = !props.modelValue
      } else {
        foldState.value = !innerValue.value
      }
    }
    const cleanup = () => {
      if (observer) {
        observer.disconnect()
        observer = undefined
      }
    }
    const stopWatch = watch(
      () => boxRef.value,
      () => {
        if (boxRef.value) {
          cleanup()
          observer = new ResizeObserver((entry) => {
            let contentHeight = unref(contentRef)?.clientHeight
            lineHeight.value = Number(
              getComputedStyle(boxRef.value)['line-height'].replace('px', '')
            )
            needFold.value = contentHeight > lineHeight.value * line
          })
          observer?.observe(boxRef.value, { box: 'content-box' })
        }
      },
      { immediate: true, flush: 'post' }
    )
    onUnmounted(() => {
      cleanup()
      stopWatch()
    })
    return () => {
      return (
        <div
          style={`height:${foldState.value && needFold.value ? lineHeight.value * line + 'px' : 'auto'};`}
          class="c-relative c-overflow-hidden"
          ref={boxRef}
        >
          {slots.default ? (
            <div ref={contentRef}>{slots.default()}</div>
          ) : (
            <div ref={contentRef} v-html={text}></div>
          )}
          {needFold.value ? (
            <div
              class={{
                'c-pl-px c-cursor-pointer c-text-right c-text-blue-700 c-flex c-items-start c-justify-end': true,
                'c-absolute c-w-12/12 c-bottom-0px c-right-0px': foldState.value
              }}
              onClick={toggleStatus}
            >
              {slots?.toggle ? (
                slots?.toggle({ foldState: foldState.value })
              ) : (
                <>
                  <span
                    style={`height:${lineHeight.value}px;`}
                    class="c-w-26px c-from-transparent c-to-white c-bg-gradient-to-r"
                  ></span>
                  <span class="c-bg-white">{foldState.value ? '展开' : '收起'}</span>
                </>
              )}
            </div>
          ) : null}
        </div>
      )
    }
  }
})
</script>
