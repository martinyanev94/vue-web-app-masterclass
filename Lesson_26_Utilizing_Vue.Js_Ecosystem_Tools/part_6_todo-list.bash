npm install bootstrap
import 'bootstrap/dist/css/bootstrap.css';
<template>
  <div class="container">
    <h1 class="text-center">My To-Do List</h1>
    <div class="form-group">
      <input v-model="newTask" @keyup.enter="addTask" class="form-control" placeholder="Add a new task"/>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="task in tasks" :key="task.id">{{ task.text }}</li>
    </ul>
  </div>
</template>
