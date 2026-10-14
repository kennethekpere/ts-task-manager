interface Task {
    id: number;
    title: string;
    done: boolean;
  }
  
  const tasks: Task[] = [
    { id: 1, title: "Learn TypeScript", done: false },
    { id: 2, title: "Push first project to GitHub", done: true },
  ];
  
  function printTasks(list: Task[]): void {
    for (const task of list) {
      const mark = task.done ? "[x]" : "[ ]";
      console.log(`${mark} ${task.id}. ${task.title}`);
    }
  }
  
  printTasks(tasks);