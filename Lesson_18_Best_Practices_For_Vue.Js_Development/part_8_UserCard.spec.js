import { mount } from '@vue/test-utils';
import UserCard from '@/components/UserCard.vue';

describe('UserCard.vue', () => {
  it('renders user name and email', () => {
    const user = { name: 'John Doe', email: 'john.doe@example.com' };
    const wrapper = mount(UserCard, {
      props: { user }
    });
    
    expect(wrapper.text()).toContain(user.name);
    expect(wrapper.text()).toContain(user.email);
  });
});
