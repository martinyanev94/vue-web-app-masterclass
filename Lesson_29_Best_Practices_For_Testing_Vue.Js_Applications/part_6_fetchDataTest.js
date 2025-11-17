methods: {
  async fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) throw new Error('Network error');
      this.message = await response.json();
    } catch (error) {
      this.message = error.message;
    }
  }
}
global.fetch = jest.fn(() =>
  Promise.reject(new Error('Failed to fetch'))
);

it('sets error message on fetch failure', async () => {
  const wrapper = mount(Parent);
  
  await wrapper.vm.fetchData();
  
  expect(wrapper.text()).toContain('Failed to fetch');
});
