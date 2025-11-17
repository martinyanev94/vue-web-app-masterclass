<template>
  <div>
    <h2>Your Favorite Activities</h2>
    <input v-model="activity" @keyup.enter="addActivity" placeholder="Enter an activity" />
    <ul>
      <li v-for="(act, index) in activities" :key="index">
        {{ act }} 
        <button @click="removeActivity(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const activity = ref('');
    const activities = ref<string[]>([]);

    const addActivity = () => {
      if (activity.value) {
        activities.value.push(activity.value);
        activity.value = ''; 
      }
    };

    const removeActivity = (index: number) => {
      activities.value.splice(index, 1);
    };

    return {
      activity,
      activities,
      addActivity,
      removeActivity,
    };
  },
};
</script>
