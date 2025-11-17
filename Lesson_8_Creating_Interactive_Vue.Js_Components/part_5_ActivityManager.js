<template>
  <div>
    <ul>
      <li v-for="(act, index) in activities" :key="index">
        {{ act }} 
        <button @click="removeActivity(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    activities: {
      type: Array,
      required: true,
    },
    removeActivity: {
      type: Function,
      required: true,
    },
  },
});
</script>
<template>
  <div>
    <h2>Your Favorite Activities</h2>
    <input v-model="activity" @keyup.enter="addActivity" placeholder="Enter an activity" />
    <ActivityList :activities="activities" :removeActivity="removeActivity" />
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue';
import ActivityList from './ActivityList.vue';

export default {
  components: {
    ActivityList
  },
  setup() {
    const activity = ref('');
    const activities = ref<string[]>([]);
    const message = ref('');

    const addActivity = () => {
      if (activity.value) {
        activities.value.push(activity.value);
        message.value = `Added: ${activity.value}`;
        activity.value = ''; 
      }
    };

    const removeActivity = (index: number) => {
      const removedActivity = activities.value[index];
      activities.value.splice(index, 1);
      message.value = `Removed: ${removedActivity}`;
    };

    watch(message, (newMessage) => {
      setTimeout(() => {
        message.value = '';
      }, 2000);
    });

    return {
      activity,
      activities,
      message,
      addActivity,
      removeActivity,
    };
  },
};
</script>
