methods: {
  async fetchData() {
    const response = await fetch('https://api.example.com/data');
    this.message = await response.json();
  }
}
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve('Fetched Data')
  })
);

it('fetches data and updates message', async () => {
  const wrapper = mount(Parent);
  
  await wrapper.vm.fetchData();
  
  expect(wrapper.text()).toContain('Fetched Data');
});
