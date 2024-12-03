function leastInterval(tasks, n) {
    const taskCounts = Array(26).fill(0);
  
    // Count the frequency of each task
    for (const task of tasks) {
      taskCounts[task.charCodeAt(0) - "A".charCodeAt(0)]++;
    }
  
    // Sort task frequencies in descending order
    taskCounts.sort((a, b) => b - a);
  
    // Find the maximum frequency
    const maxFreq = taskCounts[0];
    let idleTime = (maxFreq - 1) * n;
  
    // Reduce idle time by filling slots with other tasks
    for (let i = 1; i < 26 && idleTime > 0; i++) {
      idleTime -= Math.min(taskCounts[i], maxFreq - 1);
    }
  
    // If idleTime is negative, it means all idle slots are filled
    idleTime = Math.max(0, idleTime);
  
    // Total time is the number of tasks plus the remaining idle time
    return tasks.length + idleTime;
  }
  
  // Example Usage
  const tasks = ["A", "A", "A", "B", "B", "B"];
  const n = 2;
  console.log(leastInterval(tasks, n)); // Output: 8
  