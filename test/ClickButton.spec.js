import { shallowMount } from '@vue/test-utils'
import ClickButton from '@/components/ClickButton.vue'

describe('ClickButton', () => {
  test('state is unselect', () => {
    const wrapper = shallowMount(ClickButton, { propsData: { state: 'unselect' }})
    expect(wrapper.contains('button')).toBe(true)
    expect(wrapper.html()).toContain('disabled')
  });

  test('state is start', () => {
    const wrapper = shallowMount(ClickButton, { propsData: { state: 'start' }})
    expect(wrapper.html()).toContain('Start');
  });

  test('state is start', () => {
    const wrapper = shallowMount(ClickButton, { propsData: { state: 'measure' }})
    expect(wrapper.html()).toContain('Click')
  });
})
