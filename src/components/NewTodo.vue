<template>
    <div class="modal modal-show display" style="display:block">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h2 class="title">Create a new todo</h2>
                <div class="group">
                    <label class="title is-6">Title</label>
                    <input type="text" placeholder="Title" v-model="todoTitle" class="input">
                </div>

                <a class="is-pulled-right" style="display: block" @click="showTask">+ Add new task</a>

                <div class="create-tasks">                        
                    <div class="task" v-if="showTaskForm">
                        <p class="subtitle is-6">Add a task to this todo</p>
                        <div class="field">
                            <label class="title is-6" for="title">Title</label>
                            <div class="control">   
                                <input type="text" placeholder="Title"  v-model="taskTitle" id="title" class="input">
                            </div>
                        </div>

                        <div class="field">
                            <label class="title is-6" for="deadline">Deadline</label>
                            <div class="control">  
                                <input type="date" placeholder="Deadline"  v-model="taskDeadline" id="deadline" class="input">
                            </div>
                        </div>

                        <div class="field">
                            <label class="title is-6" for="status">Status</label>
                            <div class="control">
                                <input type="range" placeholder="Status" v-model="taskStatus" id="status">
                            </div>
                        </div>

                        <button class="button" @click="saveTask">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showTaskForm: false,
            todoTitle: '',
            taskTitle: '',
            taskDeadline: '',
            taskStatus: '',
            tasks: []
        }
    },

    methods: {
        saveTask(){
            
        },

        showTask(){
            this.showTaskForm = !this.showTaskForm;
            return false;
        }
    },

    mounted() {
        todoTitle.focus();
    },
}
</script>