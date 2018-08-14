import { mount } from '@vue/test-utils'
import Button from './'

describe('Button', () => {
  it('render correctly', () => {
    let wrapper = mount(Button)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('render slot correctly', () => {
    let wrapper = mount(Button, {
      slots: ['Default']
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.content').text()).toBe('Default')
  })
})
