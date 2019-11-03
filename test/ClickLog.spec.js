import { shallowMount } from '@vue/test-utils'
import ClickLog from '@/components/ClickLog.vue'

describe('ClickLog', () => {
  test('show frame log', () => {
    const wrapper = shallowMount(ClickLog, { propsData: { click_rates: [3] }})
    expect(wrapper.html()).toContain('3Fで入力しました')
  });

  test('show multi frame log', () => {
    const wrapper = shallowMount(ClickLog, { propsData: { click_rates: [3, 10] }})
    expect(wrapper.html()).toContain('3Fで入力しました');
    expect(wrapper.html()).toContain('10Fで入力しました');
  });

  test('is empty', () => {
    const wrapper = shallowMount(ClickLog, { propsData: { click_rates: [] }})
    expect(wrapper.html()).not.toContain('で入力しました')
  });
})
