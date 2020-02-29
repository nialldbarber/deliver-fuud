import { reactive } from '@vue/composition-api'

export function useFetchApi(api, item) {
  const state = reactive({
    data: [],
  })

  async function fetchData() {
    try {
      if (item) {
        const response = await fetch(api).then((res) => res.json()).then(data => {
          state.data = response
        })
      } else {
        const response = await fetch(api).then((res) => res.json())
        console.log(response)
        state.data = response
      }
    } catch (err) {
      console.log(err)
    }
  }

  return {
    state,
    fetchData
  }
}
