mounted() {
  fetch('https://api.example.com/todos')
    .then(response => response.json())
    .then(data => {
      this.tasks = data.map(task => {
        return { id: task.id, text: task.title };
      });
    })
    .catch(error => console.error('Error fetching tasks:', error));
}
