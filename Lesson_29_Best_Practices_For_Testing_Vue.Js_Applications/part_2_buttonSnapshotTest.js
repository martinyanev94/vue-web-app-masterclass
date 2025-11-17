it('matches the snapshot', () => {
  const wrapper = shallowMount(Button, {
    props: { label: 'Click Me' }
  });
  expect(wrapper.html()).toMatchSnapshot();
});
