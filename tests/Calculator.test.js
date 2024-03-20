import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Calculator from '@/components/Calculator.vue'; 

describe('Calculator.vue', () => {
  it('displays initial value correctly', () => {
    const wrapper = mount(Calculator);
    expect(wrapper.find('.display').text()).toBe('0');
  });

  it('updates display when buttons are clicked', async () => {
    const wrapper = mount(Calculator);
    await wrapper.find('[data-test="button-1"]').trigger('click');
    await wrapper.find('[data-test="button-+"]').trigger('click');
    await wrapper.find('[data-test="button-2"]').trigger('click');
    expect(wrapper.find('.display').text()).toBe('1+2');
  });

  it('calculates and displays result correctly', async () => {
    const wrapper = mount(Calculator);
    await wrapper.find('[data-test="button-1"]').trigger('click');
    await wrapper.find('[data-test="button-+"]').trigger('click');
    await wrapper.find('[data-test="button-2"]').trigger('click');
    await wrapper.find('[data-test="button-equals"]').trigger('click');
    expect(wrapper.find('.display').text()).toBe('3');
  });

  it('clears history correctly', async () => {
    const wrapper = mount(Calculator);
    // Perform some calculations to add to history
    await wrapper.find('[data-test="button-1"]').trigger('click');
    await wrapper.find('[data-test="button-+"]').trigger('click');
    await wrapper.find('[data-test="button-2"]').trigger('click');
    await wrapper.find('[data-test="button-equals"]').trigger('click');
    // Ensure Toggle history btn is clicked
    await wrapper.find('.toggle-history-btn').trigger('click');
    // Ensure history is created
    expect(wrapper.vm.history.length).toBeGreaterThan(0);
    // Clear history
    await wrapper.find('[data-test="clear-history"]').trigger('click');
    expect(wrapper.vm.history).toHaveLength(0);
  });

  it('toggles history view', async () => {
    const wrapper = mount(Calculator);
    // Toggle history on
    await wrapper.find('.toggle-history-btn').trigger('click');
    expect(wrapper.find('.history').exists()).toBe(true);
    // Toggle history off
    await wrapper.find('.toggle-history-btn').trigger('click');
    expect(wrapper.find('.history').exists()).toBe(false);
  });
});
