import { reactive } from '@vue/composition-api'

export function useFetchApi(api) {
  const state = reactive({
    data: [],
    loading: false,
    error: false,
  })

  async function fetchData() {
    state.loading = true
    try {
      const response = await fetch(api).then((res) => res.json())
      state.data = response
      state.loading = false
    } catch (err) {
      console.log(err)
      state.error = true
      state.loading = false
    }
  }

  return {
    state,
    fetchData
  }
}
