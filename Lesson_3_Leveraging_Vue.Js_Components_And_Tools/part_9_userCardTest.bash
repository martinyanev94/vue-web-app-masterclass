npm install --save-dev @vue/test-utils jest
import { shallowMount } from '@vue/test-utils';
import UserCard from '@/components/UserCard.vue';
import store from '@/store/index';

describe('UserCard.vue', () => {
  it('toggles user active state when button is clicked', async () => {
    const user = { name: 'John Doe', email: 'john@example.com', active: true };
    
    const wrapper = shallowMount(UserCard, {
      propsData: { user },
      store
    });

    await wrapper.find('button').trigger('click');
    expect(store.state.users.find(u => u.email === user.email).active).toBe(false);
  });
});
