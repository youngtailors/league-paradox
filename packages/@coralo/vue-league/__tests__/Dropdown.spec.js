import { mount, shallowMount } from '@vue/test-utils'
import Arrow from '../src/components/Dropdown/Arrow'
import Dropdown from '../src/components/Dropdown'

describe('Arrow', () => {
  it('render correctly', () => {
    const wrapper = mount(Arrow)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('Dropdown', () => {
  it('render correctly', () => {
    const wrapper = shallowMount(Dropdown)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
