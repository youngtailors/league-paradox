import { mount, shallowMount } from '@vue/test-utils'
import Checkbox from '../src/components/Checkbox'

describe('Checkbox', () => {
  it('render checked correctly', () => {
    const wrapper = shallowMount(Checkbox, {
      slots: {
        default: ['Checked']
      }
    })
    wrapper.setProps({
      checked: true
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.classes()).toContain('checked')
    expect(wrapper.find('.label').text()).toBe('Checked')
  })
  it('render unchecked correctly', () => {
    const wrapper = shallowMount(Checkbox, {
      slots: {
        default: ['Unchecked']
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.classes().includes('checked')).toBeFalsy()
    expect(wrapper.find('.label').text()).toBe('Unchecked')
  })
  it('render disabled correctly', () => {
    const wrapper = shallowMount(Checkbox, {
      slots: {
        default: ['Disabled']
      }
    })
    wrapper.setProps({
      disabled: true
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.label').text()).toBe('Disabled')
    expect(wrapper.classes()).toContain('disabled')
  })
  it('should change value when it is clicked', () => {
    const wrapper = mount({
      template: '<div><lu-checkbox v-model="checked" /></div>',
      data () {
        return {
          checked: false
        }
      },
      components: {
        'lu-checkbox': Checkbox
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.classes().includes('checked')).toBeFalsy()
    wrapper.find('.checkbox').trigger('click')
    expect(wrapper.find('.checkbox').classes()).toContain('checked')
  })
  it('should call blur if it defined', () => {
    const fn = jest.fn()
    const wrapper = shallowMount(Checkbox, {
      listeners: {
        blur: fn
      }
    })
    wrapper.trigger('blur')
    expect(fn.mock.calls.length).toBe(1)
  })
})
