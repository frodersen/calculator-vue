import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ContactForm from '@/components/ContactForm.vue';
import axios from 'axios';


describe('ContactForm.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(ContactForm);
    expect(wrapper.find('form').exists()).toBeTruthy();
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
    expect(wrapper.find('input[type="email"]').exists()).toBeTruthy();
    expect(wrapper.find('textarea').exists()).toBeTruthy();
    expect(wrapper.find('button[type="submit"]').exists()).toBeTruthy();
  });

  
  it('v-model binds form inputs correctly', async () => {
    const wrapper = mount(ContactForm);
    const input = wrapper.find('input[type="text"]');
    await input.setValue('John Doe');
    expect(wrapper.vm.form.name).toBe('John Doe');
  });

  it('loads and saves form data from/to localStorage', () => {
    // Mock localStorage
    Storage.prototype.getItem = vi.fn();
    Storage.prototype.setItem = vi.fn();

    const wrapper = mount(ContactForm);
    // Call saveFormData
    wrapper.vm.form.name = 'John Doe';
    wrapper.vm.saveFormData();
    expect(localStorage.setItem).toHaveBeenCalledWith('contactFormName', 'John Doe');

    // Call loadFormData
    localStorage.getItem.mockReturnValue('John Doe');
    wrapper.vm.loadFormData();
    expect(wrapper.vm.form.name).toBe('John Doe');
  });
});
