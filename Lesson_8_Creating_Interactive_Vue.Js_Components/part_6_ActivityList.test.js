import { mount } from '@vue/test-utils';
import ActivityList from '@/components/ActivityList.vue';

describe('ActivityList.vue', () => {
  it('renders activities when passed as props', () => {
    const activities = ['Swimming', 'Running', 'Reading'];
    const wrapper = mount(ActivityList, {
      props: { activities },
    });

    const items = wrapper.findAll('li');
    expect(items.length).toBe(3);
    expect(items[0].text()).toContain('Swimming');
  });

  it('calls removeActivity when button is clicked', async () => {
    const activities = ['Swimming'];
    const removeActivity = jest.fn();
    const wrapper = mount(ActivityList, {
      props: { activities, removeActivity },
    });

    await wrapper.find('button').trigger('click');
    expect(removeActivity).toHaveBeenCalled();
  });
});
