<template>
    <div class="modal modal-show display" style="display:block">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h2 class="title">
                    Create a new todo
                </h2>
                <div class="group">
                    <label class="title is-6">Title</label>
                    <input type="text" placeholder="Title" v-model="todoTitle" class="input">
                </div>

                <a class="is-pulled-right" @click="showTask">{{ showTaskForm ? "- Hide task form" : "+ Add new task"}}</a>

                <div class="tasks-list">
                    <ul v-if="tasks.length > 0">
                        <transition-group name="slideIn">
                            <li class="columns" v-for="task in tasks" :key="task.title">
                                <div class="column is-9">
                                    <h2 class="title is-6">
                                        {{task.title}}
                                    </h2>
                                    <p class="subtitle is-7">
                                        {{task.deadline}}
                                    </p>
                                </div>
                                <div class="column is-2">
                                    <i class="is-pulled-right">status</i>
                                </div>
                                <div class="column is-flex is-center">
                                    <a @click="hideTask">&times;</a>
                                </div>
                            </li>
                        </transition-group>
                    </ul>
                </div>

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

                        <button class="button is-small is-pulled-left is-link" @click="saveTask">
                            Save
                        </button>
                    </div>
                </div>
                <br>
                <button class="button is-success" :disabled="formBusy" @click="saveTodo()">Save todo</button>
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
            formBusy: true,
            tasks: []
        }
    },

    methods: {
        saveTask(){
            if(this.taskTitle == "") return;

            this.tasks.push(
                {
                    title: this.taskTitle, 
                    deadline : this.taskDeadline,
                    status : this.taskStatus
                }
            );

            this.taskTitle = '';
            this.taskDeadline = '';
            this.taskStatus = '';

            this.showTask();
        },

        hideTask(el){
            el.path[2].style.display = "none"
        },

        showTask(){
            this.showTaskForm = !this.showTaskForm;
            return false;
        },

        saveTodo(){

        }
    },

    watch: {
        todoTitle(){
            this.formBusy = this.todoTitle == "";
        }
    },

}
</script>