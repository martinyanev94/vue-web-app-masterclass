import { mapState, mapMutations } from 'vuex';
export default {
  props: {
    userEmail: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(['users']),
    user() {
      return this.users.find(user => user.email === this.userEmail);
    }
  },
  methods: {
    ...mapMutations(['TOGGLE_USER_ACTIVE']),
    toggleActive() {
      this.TOGGLE_USER_ACTIVE(this.userEmail);
    }
  }
}
